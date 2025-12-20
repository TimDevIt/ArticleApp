import axios from "axios"


export const commentModule = {
    state: () => ({
        comments: []
    }),
    mutations: {
        setComments(state, comments) {
            state.comments = comments;
        },
        addComment(state, comment) {
            state.comments.unshift(comment);
        },
        updateComment(state, payload) {
            const {commentId, text} = payload;
            const index = state.comments.findIndex(c => c.id === commentId); 
            if (index !== -1) {
                state.comments[index].text = text;
            }
        },
        deleteComment(state, commentId) {
            state.comments = state.comments.filter(c => c.id !== parseInt(commentId));
        }
    },
    getters: {
        comments: state => state.comments
    },
    actions: {
        async fetchComments({commit}, articleId) {
            try {
                const response = await axios.get(`http://localhost:3000/article/${articleId}/comments`);
                commit('setComments', response.data);
            } catch (error) {
                console.error('Ошибка загрузки комментариев: ', error);
            }
        },
        async createComment({commit}, {articleId, text}) {
            try {
                const response = await axios.post(`http://localhost:3000/article/${articleId}/comment`, { text });
                commit('addComment', response.data);
                return response.data;
            } catch (error) {
                console.error('Ошибка создания: ', error);
            }
        },
        async updateComment({commit}, {articleId, commentId, text}) {
            try {
                const response = await axios.patch(`http://localhost:3000/article/${articleId}/comment/${commentId}`, { text });
                commit('updateComment', {commentId, text});
            } catch (error) {
                console.log('Ошибка обновления: ', error);
            }
        },
        async deleteComment({commit}, {articleId, commentId}) {
            try {
                const response = await axios.delete(`http://localhost:3000/article/${articleId}/comment/${commentId}`);
                commit('deleteComment', commentId);
            } catch (error) {
                console.error('Ошибка удаления: ', error);
            }
        }
    },
    namespaced: true
}