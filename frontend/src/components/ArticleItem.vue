<template>
    <v-list-item 
      :key="article.id"
    >
      <div class="pa-2">
        <div class="text-h6 mb-1">{{ article.title }}</div>
        <div class="text-body-2 grey lighten-1">
            {{ article.text }}
        </div>
      </div>
      <template #append>
        <v-btn
          @click="$router.push(`/article/${article.id}`)"
        >
            Открыть
        </v-btn>
      </template>
    </v-list-item>
</template>

<script>
    export default {
        props: {
           article: {
            type: Object, 
            required: true
           }
        }
    }
</script>

<style scoped>

</style>