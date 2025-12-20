<template>
  <v-container>
    <h4 class="mb-6 text-h5 font-weight-bold">
      Создание новой статьи
    </h4>
    <article-form
      @submit="handleCreateArticle"  
      @cancel="$router.push('/articles')"
      button-text="Создать статью"
    />
    <v-snackbar v-model="success" color="success" timeout="3000">
      Статья создана!
    </v-snackbar>
  </v-container>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue';
import { mapActions } from 'vuex';

export default {
  name: 'CreateArticleView',
  components: { ArticleForm },
  data() {
    return { success: false };
  },
  methods: { 
    ...mapActions('article', ['createArticle']),
    async handleCreateArticle(article) {
      try {
        await this.createArticle(article);
        this.success = true;
        this.$router.push('/articles');  
      } catch (error) {
        console.error('Ошибка: ', error);
      }
    }
  }
};
</script>
