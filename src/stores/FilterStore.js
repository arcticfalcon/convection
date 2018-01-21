import { observable, action, toJS, computed } from 'mobx'

class FilterStore {
  @observable fields = new Map()
  @observable data = []
  @observable busy = false
  @observable
  sort = {
    column: undefined,
    direction: 1,
  }
  @observable page = 1
  @observable pages
  fetchPromise

  constructor(fetch) {
    this.fetchPromise = fetch
  }

  @action
  handleChange = (e, { name, value }) => {
    this.fields.set(name, value)
  }

  getProp = path => this.fields.get(path)

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

  @action setPage = page => (this.page = page)

  getSort(path) {
    return this.sort.column === path ? this.sort.direction : 0
  }

  @action
  init() {
    this.fetch()
  }

  @action
  reset = () => {
    this.fields.clear()
  }

  @computed
  get model() {
    return this.fields
  }

  @action
  fetch() {
    this.busy = true

    this.fetchPromise(this.fields, this.sort, this.page)
      .then(this.fetchSuccess)
      .catch(this.fetchFailed)
  }

  @action
  fetchSuccess = ({ data }) => {
    this.data = data
    this.pages = 13 // ToDo: use actual value
    this.busy = false
  }

  @action
  fetchFailed = ({ data }) => {
    // ToDo: show error
    this.busy = false
  }

  @action
  submit = () => {
    this.fetch()
  }

  isValid = () => true
}

export default FilterStore
