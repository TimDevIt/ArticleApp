<template>
  <v-list>
    <article-item
      v-for="article in articles"
      :article="article"
      :key="article.id"
    >
    </article-item>
  </v-list>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue';

  export default {
    components: {
      ArticleItem
    },
    props: {
      articles: {
        type: Array,
        required: true,
      }
    }
    
  }
</script>

<style scoped>

</style>