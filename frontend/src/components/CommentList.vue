<template>
    <v-container>
        <v-card-title class="text-h6 mb-4">
            Комментарии ({{ comments.length }})
        </v-card-title>
        <div 
            v-if="!comments.length" 
            class="text-center pa-8 grey--text">
            Нет комментариев
        </div>
        <div v-else>
            <comment-item
                v-for="comment in comments"
                :key="comment.id"
                :comment="comment"
                :article-id="articleId"
            >
            </comment-item>
        </div>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CommentItem from '@/components/CommentItem.vue';

export default {
    name: 'CommentList',
    components: {
        CommentItem
    },
    props: {
        articleId: [String, Number]
    },
    computed: {
        ...mapState('comment', ['comments'])
    },
    async mounted() {
        await this.fetchComments(this.articleId);
    },
    methods: {
        ...mapActions('comment', ['fetchComments'])
    }

}
</script>

 