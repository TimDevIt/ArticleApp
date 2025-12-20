<template>
    <article-list
        :articles="articles"
    >
    </article-list>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';
import { mapActions, mapState } from 'vuex';

    export default {
        name: "ArticleListView",
        components: {
            ArticleList
        },
        methods: {
            ...mapActions('article', ['fetchArticles'])
        },
        mounted() {
            this.fetchArticles();
        },
        computed: {
            ...mapState('article', ['articles']),
        },
    }
</script>

