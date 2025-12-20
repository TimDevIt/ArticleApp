<template>
    <v-card class="mx-auto pa-6" max-width="800" rounded="lg" elevation="4">
        <v-card-text class="pt-0">
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    v-model="text" 
                    label="Комментарий" 
                    rows="4"
                    variant="outlined"
                    density="comfortable"
                    @keyup.enter="submit"
                    hide-details
                    class="ma-0"
                />
            </v-col>
        </v-row>
        </v-card-text>
        <v-card-actions>
        <v-spacer />
        <v-btn 
            color="primary" 
            size="large"
            @click="submit" 
            :disabled="!text?.trim()"
            :loading="loading"
            class="mr-2"
        >
            Отправить комментарий
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        name: 'CommentForm',
        props: {
            articleId: [String, Number]
        },
        data() {
            return {
                loading: false,
                text: ''
            }
        },
        methods: {
            ...mapActions('comment', ['createComment']),
            async submit() {
                if (!this.text.trim() || !this.articleId) return;
                await this.createComment({
                    articleId: this.articleId,
                    text: this.text.trim()
                });
                this.text = '';
            }
        }        
    }
</script>
