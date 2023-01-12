export default {
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    // 登录成功之后的 token 字符串
    token: '',
    // 用户的基本信息  从本地缓存中同步获取指定 key 对应的内容。
    userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}')
  }),

  mutations: {
    // 更新用户的基本信息
    updateUserInfo(state, userinfo) {
      state.userinfo = userinfo
      // 通过 this.commit() 方法，调用 m_user 模块下的 saveUserInfoToStorage 方法，将 userinfo 对象持久化存储到本地
      this.commit('m_user/saveUserInfoToStorage')
    },

    // 将 userinfo 持久化存储到本地
    saveUserInfoToStorage(state) {
      uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
    }
  },


  getters: {},
}
