export default {
    // 直接提交 事件, 这里会调用 mutations 中的 changeCity
    // this.$store.commit("changeCity", city);
    changeCity(state, city) {
        state.city = city;
        try {
            localStorage.city = city
        } catch (e) {}
    }
}
