<template>
    <v-form @submit.prevent>
        <v-row class="justify-end mt-2">
            <v-text-field 
                label="Название статьи"
                v-model="article.title"
            >
            </v-text-field>
        </v-row>
        <v-row class="justify-end mt-2">
                <v-textarea 
                    label="Текст статьи"
                    v-model="article.text"
                >
                </v-textarea>
        </v-row>
        <v-row class="justify-end mt-2">
            <v-btn 
                color="primary" 
                class="ml-auto"
                @click="createArticle" 
            >
                Создать статью
            </v-btn>
        </v-row>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    title: '',
                    text: ''
                }
            }
        },
        methods: {
            createArticle() {
                this.$emit('create', this.article);
                this.article = {
                    title: '',
                    text: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>