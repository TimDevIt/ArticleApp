import axios from "axios"


export const commentModule = {
    state: () => ({
        comments: []
    }),
    mutations: {
        setComments(state, comments) {
            state.comments = comments;
        }
    },
    getters: {

    },
    actions: {

    },
    namespaced: true
}