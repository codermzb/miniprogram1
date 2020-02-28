import {request} from "./request";
export function getHomeMultidata(options) {
  return request({
    url: '/home/multidata',
  })
}