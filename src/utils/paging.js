import {get} from "./http";

class Paging {
    req
    start
    count
    url
    locker = false
    moreData = true
    empty = true
    accumulator = []

    constructor(req, start = 0, count = 10) {
        this.req = req
        this.start = start
        this.count = count
        this.url = req.url
    }

    async getMoreData() {

        if (!this.moreData) {
            return
        }

        if (!this._getLocker()) {
            return
        }
        const data = await this._acctualData()
        this._releaseLocker()
        return data
    }

    async _acctualData() {
        this._getCurrentReq()
        const paging = await get(this.req.url)

        if (!paging) {
            return null
        }

        // 没有数据时，返回的数据结构
        if (paging.total === 0) {
            this.empty = true
            return {
                empty: true,
                moreData: false,
                items: [],
                accumulator: [],
            }
        }

        this.moreData = Paging._moreData(paging.page, paging.total_page)
        if (this.moreData) {
            this.start += this.count
        }

        this.accumulate(paging.items)
        this.empty = false
        return {
            empty: false,
            moreData: this.moreData,
            items: paging.items,
            accumulator: this.accumulator
        }
    }

    accumulate(items) {
        this.accumulator = this.accumulator.concat(items)
    }

    _getCurrentReq() {
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        if (url.includes('?')) {
            url += '&' + params
        } else {
            url += '?' + params
        }
        this.req.url = url

    }

    static _moreData(page, totalPage) {
        return page < totalPage - 1 ? true : false
    }

    _getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }

    _releaseLocker() {
        this.locker = false
    }
}

export {
    Paging
}
