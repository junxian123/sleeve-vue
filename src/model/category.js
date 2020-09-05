import {
  get
} from '@/utils/http.js'

class Category {
  static getHomeLocationC() {
    return get('category/grid/all')
  }
}

export {
  Category
}
