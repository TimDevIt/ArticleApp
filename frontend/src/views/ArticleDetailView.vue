<template>
    <article-detail
        v-if="currentArticle"
        :article="currentArticle"
    >

    </article-detail>
</template>

<script>
import ArticleDetail from '@/components/ArticleDetail.vue';
import { mapActions, mapState } from 'vuex';

    export default {
        name: 'ArticleDetailView',
        components: {
            ArticleDetail
        },
        methods: {
            ...mapActions({
                fetchArticleById: 'article/fetchArticleById'
            })
        },
        computed: {
            ...mapState({
                currentArticle: state => state.article.currentArticle,
            })
        },
        async mounted() {
            const articleId = this.$route.params.id;
            await this.fetchArticleById(articleId);
        },
        beforeRouteUpdate(to, from, next) {
            this.fetchArticleById(to.params.id).then(next);
        }

    }
</script>
 