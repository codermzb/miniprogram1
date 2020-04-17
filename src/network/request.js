const baseUrl = 'http://106.54.54.237:8000/api/h8'
// const baseUrl = 'http://152.136.185.210:8000/api/h8',
// const baseUrl = 'http://123.207.32.32:8000/api/h8',
export function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method || "get",
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}