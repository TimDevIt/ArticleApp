<template>
  <v-card class="mx-auto pa-6" max-width="800" rounded="lg">
    <v-card-item>
      <v-card-title class="text-h3 font-weight-bold">
        {{ article.title }}
      </v-card-title>
      <v-card-subtitle class="text-caption mt-2 grey--text">
        Создано: {{ formatDate(article.createdAt) }}
        <span v-if="article.updatedAt !== article.createdAt">
          | Обновлено: {{ formatDate(article.updatedAt) }}
        </span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="pt-6 text-body-1">
      {{ article.text }}
    </v-card-text>

    <v-card-actions class="pa-6">
      <v-btn 
        color="primary" 
        prepend-icon="mdi-arrow-left"
        to="/articles"
      >
        К списку
      </v-btn>
      
      <v-spacer />
      
      <v-btn 
        color="warning" 
        :to="`/article/${article.id}/update`"  
        class="mr-2"
      >
        Редактировать
      </v-btn>
      <v-btn 
        color="error" 
        @click="showDeleteDialog = true"
      >
        Удалить
      </v-btn>
    </v-card-actions>

    <v-dialog v-model="showDeleteDialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="text-h5">
          Удалить статью?
        </v-card-title>
        <v-card-text>
          <p class="font-weight-medium mb-2">{{ article.title }}</p>
          <p class="text-caption grey--text">Эта операция необратима</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn 
            @click="showDeleteDialog = false"
            text="secondary"
          >
            Отмена
          </v-btn>
          <v-btn 
            color="error" 
            :loading="deleting"
            @click="handleDelete"
          >
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDeleteDialog: false,
      deleting: false
    };
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('ru-RU');
    },
    ...mapActions('article', ['deleteArticleById']),
    async handleDelete() {
      this.deleting = true;
      try {
        await this.deleteArticleById(this.article.id);
        this.$router.push('/articles');   
      } catch (error) {
        console.error('Ошибка удаления:', error);
      } finally {
        this.deleting = false;
        this.showDeleteDialog = false;
      }
    }
  }
};
</script>
