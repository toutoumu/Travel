export default {
    // 处理 this.$store.dispatch("changeCity", city);
    changeCity({commit}, city) {
        // 提交修改,调用 mutations 中的 changeCity
        commit('changeCity', city)
    },
}
