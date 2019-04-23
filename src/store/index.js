import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from './state'
import mutations from './mutations'

// 1. 普通代码中 this.$store.dispatch("changeCity", city);
// 2. actions 中 commit('changeCity', city)
// 3. mutations 中 state.city = city
// 4. 一般我们直接调用 mutations 来更改全局状态, 而不是 通过 1,2,3来做
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
