import axios from "axios";


export const articleModule = {
    state: () =>  ({
        articles: [],
        currentArticle: null
    }),
    mutations: {
        setArticles(state, articles) {
            state.articles = articles;
        },
        setCurrentArticle(state, article) {
            state.currentArticle = article;
        },
        addArticle(state, article) {
            state.articles.unshift(article);
        },
        updateArticleInList(state, updatedArticle) {
            const index = state.articles.findIndex(a => a.id === updatedArticle.id);
            if (index !== -1) {
                state.articles[index] = updatedArticle
            }
        },
        deleteArticleFromList(state, articleId) {
            state.articles = state.articles.filter(a => a.id !== parseInt(articleId));

            if (state.currentArticle && state.currentArticle.id === parseInt(articleId)) {
                state.currentArticle = null;
            }
        }
    },
    actions: {
        async fetchArticles({ commit }) {
            try {
                const response = await axios.get('http://localhost:3000/articles');
                commit('setArticles', response.data);
            } catch (error) {
                console.error('Ошибка загрузки статей: ', error);
            }
        },
        async createArticle({commit}, articleData) {
            try {
                const response = await axios.post('http://localhost:3000/article', articleData);
                commit('addArticle', response.data);
                return response.data;
            } catch (error) {
                console.error('Ошибка создания статьи', error);
            }
        },
        async fetchArticleById({commit}, articleId) {
            try {
                const response = await axios.get(`http://localhost:3000/article/${articleId}`);
                commit('setCurrentArticle', response.data);
                return response.data;
            } catch (error) {
                console.log('Ошибка загрузки статьи: ', error);
            }
        },
        async updateArticleById({commit}, {articleId, articleData}) {
            try {
                const response = await axios.patch(`http://localhost:3000/article/${articleId}`, articleData);
                commit('updateArticleInList', response.data);
                commit('setCurrentArticle', response.data);
                return response.data;
            } catch (error) {
                console.error('Ошибка обновления статьи: ', error);
            }
        },
        async deleteArticleById({commit}, articleId) {
            try {
                await axios.delete(`http://localhost:3000/article/${articleId}`);
                commit('deleteArticleFromList', articleId);
            } catch (error) {
                console.error('Ошибка удаления статьи: ', error);
            }
        }
    },
    namespaced: true,
}