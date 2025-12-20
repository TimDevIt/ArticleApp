<template>
    <v-card flat class="mb-2" border="primary lg">
        <template v-if="!editing">
            <v-card-text>
                <div class="text-body1 mb-2">{{ comment.text }}</div>
                <div class="text-caption grey--text">
                    {{ new Date(comment.createdAt).toLocaleString('ru-RU') }}
                </div>
            </v-card-text>
            
            <v-card-actions>
                <v-spacer />
                <v-btn
                    size="small"
                    variant="text"
                    @click="startEdit"
                >
                    ✏️ Редактировать
                </v-btn>
                <v-btn
                    size="small"
                    variant="text"
                    color="error"
                    @click="showDeleteDialog = true"
                    style="margin-left: 15px;"
                >
                    🗑️ Удалить
                </v-btn>
            </v-card-actions>
        </template>

        <template v-else>
            <v-card-text>
                <v-textarea
                    v-model="editText"
                    :rules="[rules.required, rules.minLength]"
                    rows="3"
                    variant="outlined"
                    autofocus
                    hide-details
                />
            </v-card-text>
            
            <v-card-actions>
                <v-btn
                    size="small"
                    variant="text"
                    @click="cancelEdit"
                >
                    Отмена
                </v-btn>
                <v-spacer />
                <v-btn
                    color="primary"
                    :loading="saving"
                    @click="saveEdit"
                    :disabled="!editText?.trim()"
                >
                    Сохранить
                </v-btn>
            </v-card-actions>
        </template>
    </v-card>
    <v-dialog v-model="showDeleteDialog" max-width="500" persistent>
        <v-card>
            <v-card-title class="text-h5">Удалить комментарий?</v-card-title>
            <v-card-text>
                <p class="text-body1 mb-2">{{ comment.text.substring(0, 100) }}...</p>
                <p class="text-caption grey--text">Эта операция необратима</p>
            </v-card-text>
        
            <v-card-actions>
                <v-spacer />
                <v-btn @click="showDeleteDialog = false" variant="text">
                    Отмена
                </v-btn>
                <v-btn 
                    color="error" 
                    :loading="deleting"
                    @click="confirmDelete"
                >
                    Удалить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CommentItem',
    props: {
        comment: Object,
        articleId: [String, Number]
    },
    data() {
        return {
            editing: false,
            saving: false,
            deleting: false,
            showDeleteDialog: false,
            editText: '',
            rules: {
                required: v => !!v || 'Текст обязателен',
                minLength: v => (v && v.length >= 3) || 'Минимум 3 символа'
            }
        }
    },
    methods: {
        ...mapActions('comment', ['updateComment', 'deleteComment']),
    
        startEdit() {
            this.editText = this.comment.text;
            this.editing = true;
        },
    
        async saveEdit() {
            if (!this.editText.trim()) return;
      
            this.saving = true;
            try {
                await this.updateComment({
                    articleId: this.articleId,
                    commentId: this.comment.id,
                    text: this.editText.trim()
                });
                this.editing = false;
            } catch (error) {
                console.error('Ошибка сохранения:', error);
            } finally {
                this.saving = false;
            }
        },
    
        cancelEdit() {
            this.editing = false;
            this.editText = '';
        },
    
        async confirmDelete() {
            this.deleting = true;
            try {
                await this.deleteComment({
                    articleId: this.articleId,
                    commentId: this.comment.id
                });
                this.showDeleteDialog = false;
            } catch (error) {
                console.error('Ошибка удаления:', error);
            } finally {
                this.deleting = false;
            }
        }
    }
}
</script>
