const request = {
  get (url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode !== 200) {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            })
            return false
          }
          resolve(res.data)
        },
        fail: function (error) {
          reject(error)
        },
        complete: function () {}
      })
    })
  },
  post (url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          resolve(res.data)
        },
        fail: function (error) {
          reject(error)
        },
        complete: function () {}
      })
    })
  }
}

export default request
