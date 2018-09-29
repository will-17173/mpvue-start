export default function (store) {
  wx.getSetting({
    success: res => {
      if (res.errMsg == 'getSetting:ok' && res.authSetting['scope.userInfo']) {
        let open_id = wx.getStorageSync('open_id');
        if (!open_id) {
          wx.getUserInfo({
            success: function(res) {
              wx.setStorageSync('userInfo', res.userInfo);
            }
          })

          wx.login({
            success: res => {
              if (res.code) {
                store.dispatch('LOGIN', {
                  code: res.code
                });
              }
            }
          })
        }
      }
    }
  })
}
