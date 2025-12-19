<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary" dark>
      <v-app-bar-title>ArticleApp</v-app-bar-title>
      
      <!-- Desktop навигация -->
      <v-spacer></v-spacer>
      <v-btn text to="/" exact>Главная</v-btn>
      <v-btn text to="/articles">Список статей</v-btn>
      <v-btn text to="/article">Новая статья</v-btn>
    </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
}
</script>


<style>


</style>