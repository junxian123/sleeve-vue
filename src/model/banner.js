import {get} from '@/utils/http.js'
class Banner {
  static locationB = 'b-1'
  static locationG = 'b-2'
  static getHomeLocationB() {
    return get(`banner/name/${Banner.locationB}`)
  }

  static getHomeLocationG() {
    return get(`banner/name/${Banner.locationG}`)
  }
}

export {
  Banner
}