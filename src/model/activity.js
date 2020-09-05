import {get} from '@/utils/http.js'

class Activity {
  static LocationD = 'a-2'

  static getHomeLocationD() {
    return get(`activity/name/${Activity.LocationD}`)
  }
}

export {
  Activity
}