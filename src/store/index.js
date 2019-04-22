import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from './state'
import mutations from './mutations'

export default new Vuex.Store({
    state, mutations,
    actions: {
        // 处理 this.$store.dispatch("changeCity", city);
        changeCity({commit}, city) {
            // 提交修改,调用 mutations 中的 changeCity
            commit('changeCity', city)
        },
    },
    /* getters: {
     doubleCity: state => {
     return state.city + ' ' + state.city;
     }
     } */
})
