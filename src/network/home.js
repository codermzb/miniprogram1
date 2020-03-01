import {request} from "./request";
export function getHomeMultidata(options) {
  return request({
    url: '/home/multidata',
  })
}
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}