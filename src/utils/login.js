export default function (store) {
  wx.getSetting({
    success: res => {
      if (res.errMsg === 'getSetting:ok' && res.authSetting['scope.userInfo']) {
        let openId = wx.getStorageSync('open_id')
        if (!openId) {
          wx.getUserInfo({
            success: function (res) {
              wx.setStorageSync('userInfo', res.userInfo)
            }
          })

          wx.login({
            success: res => {
              if (res.code) {
                store.dispatch('LOGIN', {
                  code: res.code
                })
              }
            }
          })
        }
      }
    }
  })
}
