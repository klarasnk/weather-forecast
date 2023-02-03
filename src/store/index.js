import {createStore} from 'vuex'

export default createStore({
    state: {
        weather:{},
        w:1
    },
    getters: {},
    mutations: {
        setWeather(state, payload) {
            state.weather = payload;
        },
    },
    actions: {
        getWeather({commit}) {
            fetch("api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=21f731ebc999bee36dc13db346551694")
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    commit("setWeather", result);
                });
        },
    },
    modules: {}
})
