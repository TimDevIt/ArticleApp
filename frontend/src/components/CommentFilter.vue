<template>
    <v-row dense>
        <v-col cols="12" sm="4">
            <v-text-field
                v-model="localDateFrom"
                label="Дата с"
                type="date"
                density="compact"
            />
        </v-col>

        <v-col cols="12" sm="4">
            <v-text-field
            v-model="localDateTo"
            label="Дата по"
            type="date"
            density="compact"
        />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'CommentsFilter',

    data () {
        return {
            localDateFrom: '',
            localDateTo: '',
            typingTimeout: null
        }
    },

    watch: {
        localDateFrom () {
            this.scheduleEmit()
        },
        localDateTo () {
            this.scheduleEmit()
        }
    },

    methods: {
        scheduleEmit () {
            if (this.typingTimeout) {
                clearTimeout(this.typingTimeout)
            }

            this.typingTimeout = setTimeout(() => {
                if (!this.localDateFrom || !this.localDateTo) return

                this.$emit('change', {
                    dateFrom: this.localDateFrom,
                    dateTo: this.localDateTo
                })
            }, 400)
        }
    }
}
</script>
