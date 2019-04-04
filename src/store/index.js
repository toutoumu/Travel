import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
    state: state,
    /* actions: {
        // 处理 this.$store.dispatch("changeCity", city);
        changeCity(ctx, city) {
            // 提交修改,调用 mutations 中的 changeCity
            ctx.commit('changeCity', city);
        }
    },
    */
    mutations: mutations,
    /* getters: {
        doubleCity: state => {
            return state.city + ' ' + state.city;
        }
    } */
});
