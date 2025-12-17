<template>
    <v-container>
        <h4 class="mb-6 text-h5 font-weight-bold">
            Создание новой статьи
        </h4>
        <article-form
            @create="handleCreateArticle"
        >
        </article-form>
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
        data() {
            return {
                success: false
            }
        },
        components: {
            ArticleForm
        },
        methods: { 
            ...mapActions(['createArticle']), 

            async handleCreateArticle(article) {
                try {
                    await this.createArticle(article);
                    this.success = true;
                } catch (error) {
                    console.log('Ошибка: ', error);
                }
            }
        }
    }
    
</script>

<style scoped>
</style>