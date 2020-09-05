import {Paging} from '@/utils/paging'

class SpuPaging {
  static getLatestPaging() {
    return new Paging({
      url: 'spu/latest'
    },0,8)
  }
}

export {
  SpuPaging
}