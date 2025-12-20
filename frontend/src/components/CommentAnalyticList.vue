<template>
    <v-list v-if="items && items.length">
        <v-list-group
            v-for="article in items"
            :key="article.articleId"
            no-action
        >
            <template #activator="{ props }">
                <v-list-item v-bind="props">
                    <v-list-item-title>{{ article.articleTitle }}</v-list-item-title>
                    <v-list-item-subtitle>
                        Комментариев: {{ article.comments.length }}
                    </v-list-item-subtitle>
                </v-list-item>
            </template>

            <v-list-item
                v-for="comment in article.comments"
                :key="comment.id"
            >
                <v-list-item-title>{{ comment.text }}</v-list-item-title>
                <v-list-item-subtitle>
                    {{ new Date(comment.createdAt).toLocaleString('ru-RU') }}
                </v-list-item-subtitle>
            </v-list-item>
        </v-list-group>
    </v-list>

    <div v-else class="text-center pa-4 grey--text">
        Нет данных за выбранный период
    </div>
</template>

<script>
export default {
    name: 'CommentAnalyticList',
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
