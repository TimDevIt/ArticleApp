<template>
  <v-form @submit.prevent="handleSubmit">
    <v-row class="justify-end mt-2">
      <v-text-field 
        label="Название статьи"
        v-model="localArticle.title"
        :rules="[rules.required]"
        variant="outlined"
        class="mb-4"
      />
    </v-row>
    <v-row class="justify-end mt-2">
      <v-textarea 
        label="Текст статьи"
        v-model="localArticle.text"
        :rules="[rules.required]"
        rows="10"
        variant="outlined"
        class="mb-4"
      />
    </v-row>
    <v-row class="justify-end mt-2">
      <v-btn 
        color="secondary" 
        class="mr-4"
        @click="$emit('cancel')"
      >
        Отмена
      </v-btn>
      <v-btn 
        color="primary" 
        type="submit"
        :loading="loading"
        :text="buttonText"
      >
        {{ buttonText }}
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  props: {
    article: {  
      type: Object,
      default: () => ({ title: '', text: '' })
    },
    buttonText: {  
      type: String,
      default: 'Создать статью'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localArticle: { title: '', text: '' },
      rules: {
        required: v => !!v || 'Обязательное поле'
      }
    };
  },
  watch: {
    article: {  
      handler(newArticle) {
        this.localArticle = { ...newArticle };
      },
      immediate: true
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.localArticle);  
    }
  },
  emits: ['submit', 'cancel']
};
</script>
