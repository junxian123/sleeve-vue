import {
  get
} from '@/utils/http.js'
class Theme {
  static locationA = 't-1'
  static locationE = 't-2'
  static locationF = 't-3'
  static locationH = 't-4'
  themes = []

  async getThemes() {
    const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
    this.themes = await get('theme/by/names', {
      names
    })
  }

  getHomeLocationA() {
    return this.themes.find(item => item.name === Theme.locationA)
  }

  getHomeLocationF() {
    return this.themes.find(item => item.name === Theme.locationF)
  }

  getHomeLocationH() {
    return this.themes.find(item => item.name === Theme.locationH)
  }

  static getThemeSpuByName(name) {
    return get(`theme/name/${name}/with_spu`)
  }

  static getHomeLocationESpu() {
    return Theme.getThemeSpuByName(Theme.locationE)
  }
}
export {
  Theme
}
