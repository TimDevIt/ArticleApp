import axios from "axios";

export const analyticModule = {
    state: () => ({
        analyticData: [],
        dateFrom: null,
        dateTo: null
    }),
    mutations: {
        setAnalyticData(state, analyticData) {
            state.analyticData = analyticData;
        },
        setDateFrom(state, dateFrom) {
            state.dateFrom = dateFrom;
        },
        setDateTo(state, dateTo) {
            state.dateTo = dateTo;
        }
    },
    actions: {
        async fetchAnalyticData({commit}, {dateFrom, dateTo}) {
            try {
                const response = await axios.get(`http://localhost:3000/analytic/comments/?dateFrom=${dateFrom}&dateTo=${dateTo}`);
                commit('setAnalyticData', response.data);
            } catch (error) {   
                console.log('Ошибка загрузки аналитики: ', error);
            }
        }
    },
    namespaced: true
}