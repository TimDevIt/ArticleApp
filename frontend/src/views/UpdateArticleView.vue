<template>
  <v-container>
    <h4 class="mb-6 text-h5 font-weight-bold">
      Редактирование статьи
    </h4>
    <article-form
      :article="currentArticle"
      button-text="Обновить статью"
      @submit="handleUpdateArticle"
      @cancel="$router.push(`/article/${$route.params.id}`)"
    />
  </v-container>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UpdateArticleView',
  components: { ArticleForm },
  computed: {
    ...mapState('article', ['currentArticle'])
  },
  async mounted() {
    await this.fetchArticleById(this.$route.params.id);
  },
  methods: {
    ...mapActions('article', ['fetchArticleById', 'updateArticleById']),
    async handleUpdateArticle(articleData) {
      try {
        await this.updateArticleById({
          articleId: this.$route.params.id,
          articleData
        });
        this.$router.push(`/article/${this.$route.params.id}`);
      } catch (error) {
        console.error('Ошибка обновления:', error);
      }
    }
  }
};
</script>
