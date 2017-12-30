import { observable, action, toJS } from 'mobx'

class FilterStore {
  @observable fields = new Map()
  @observable data = []
  @observable busy = false
  @observable
  sort = {
    column: undefined,
    direction: 1,
  }

  constructor() {
    return new Proxy(this, filterProxyHandler)
  }

  @action
  handleChange = (e, { name, value }) => {
    this.fields.set(name, value)
  }

  @action
  handleSort = path => {
    if (this.sort.column === path) {
      // Toggle direction
      this.sort.direction = this.sort.direction * -1
    } else {
      // Change sort
      this.sort.column = path
    }

    this.fetch()
  }

  getSort(path) {
    return this.sort.column === path ? this.sort.direction : 0
  }

  @action
  init() {
    this.fetch()
  }

  @action
  fetch() {
    this.busy = true

    console.log('fetching with ', toJS(this.fields), toJS(this.sort))

    new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            data: [
              { name: { first: 'john', last: 'flem' }, status: 'asd', notes: 'qwe' },
              { name: { first: 'luke', last: 'sky' }, status: 'asd2', notes: 'qwe2' },
            ],
          }),
        1000
      )
    }).then(this.fetchSuccess)
  }

  @action
  fetchSuccess = ({ data }) => {
    this.data = data
    this.busy = false
  }

  @action
  submit = () => {
    this.fetch()
  }

  hasErrors = () => false
  isValid = () => true
}

const filterProxyHandler = {
  get: function(filter, prop) {
    if (prop in filter) {
      return filter[prop]
    }

    if (filter.fields.has(prop)) {
      return filter.fields.get(prop)
    }

    return undefined
  },
}

export default FilterStore
