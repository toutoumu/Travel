import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from './state'
import mutations from './mutations'
import actions from './actions'

// 调用 actions 中的 changeCity
//this.$store.dispatch('changeCity', city)
// 调用 mutations 中的 changeCity
// this.$store.commit('changeCity', city)

// 1. 普通代码中 this.$store.dispatch("changeCity", city); 触发 actions changeCity
// 2. actions 的 changeCity 中 commit('changeCity', city); 触发 mutations changeCity
// 3. mutations 的 changeCity 中 state.city = city 修改city
// 4. 一般我们直接调用 mutations(this.$store.commit('changeCity', city)) 来更改全局状态, 而不是 通过 1,2,3来做
export default new Vuex.Store({
    state, mutations, actions,
    /* getters: {
     doubleCity: state => {
     return state.city + ' ' + state.city;
     }
     } */
})
