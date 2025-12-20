<template>
    <article-detail
        v-if="currentArticle"
        :article="currentArticle"
    >
    </article-detail>
    <comment-form :article-id="articleId" style="margin-top: 15px;" />
    <comment-list :article-id="articleId" />
</template>

<script>
import ArticleDetail from '@/components/ArticleDetail.vue';
import CommentForm from '@/components/CommentForm.vue';
import CommentList from '@/components/CommentList.vue';
import { mapActions, mapState } from 'vuex';

    export default {
        name: 'ArticleDetailView',
        components: {
            ArticleDetail,
            CommentForm,
            CommentList
        },
        methods: {
            ...mapActions({
                fetchArticleById: 'article/fetchArticleById'
            })
        },
        computed: {
            ...mapState({
                currentArticle: state => state.article.currentArticle,
            }),
            articleId() {
                return this.$route.params.id;
            }
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
 