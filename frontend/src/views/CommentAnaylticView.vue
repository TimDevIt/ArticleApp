
<template>
    <div>
        <comment-filter @change="handleFilterChange" />

        <comment-analytic-list
            :items="analyticData"
            class="mt-4"
        />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CommentFilter from '@/components/CommentFilter.vue'
import CommentAnalyticList from '@/components/CommentAnalyticList.vue';

export default {
    name: 'CommentAnalyticView.vue',

    components: {
        CommentFilter,
        CommentAnalyticList
    },

    computed: {
        ...mapState('analytic', ['analyticData'])
    },

    methods: {
        ...mapActions('analytic', ['fetchAnalyticData']),

        async handleFilterChange ({ dateFrom, dateTo }) {
            await this.fetchAnalyticData({ dateFrom, dateTo })
        }
    }
}
</script>
