import { autorun, observable, computed, action, toJS, extendObservable, autorunAsync } from 'mobx'
import set from 'lodash/set'
import get from 'lodash/get'
import debounce from 'lodash/debounce'

class ViewModel {
  @observable busy = false

  @observable touched = []

  @observable model

  fetch
  submitHandler

  constructor(model, fetch, submitHandler) {
    this.model = model
    this.fetch = fetch
    this.submitHandler = submitHandler
  }

  isTouched = path => (path ? this.touched.includes(path) : this.touched.length > 0)

  @action
  handleChange = (e, { name, value }) => {
    this.setProp(name, value)
  }

  @action
  setProp = (path, value) => {
    set(this.model, path, value)

    if (!this.touched.includes(path)) {
      this.touched.push(path)
    }

    this.debouncedValidate(path)
  }

  getProp = path => {
    return get(this.model, path)
  }

  debouncedValidate = debounce(path => this.model.validate(path), 500)

  @computed
  get modelJSON() {
    if (this.model.toJSON) {
      return this.model.toJSON()
    }
    return toJS(this.model)
  }

  @action
  init(routeParams) {
    this.busy = true
    this.fetch(routeParams)
      .then(this.fetchSuccess)
      .catch(this.fetchFailed)
  }

  @action
  fetchSuccess = ({ data }) => {
    extendObservable(this.model, data)
    this.busy = false
  }
  @action
  fetchFailed = ({ data }) => {
    // ToDo: show error
    this.busy = false
  }

  @action
  submit = () => {
    this.model.validate()

    if (this.model.isValid) {
      this.busy = true
      // preSubmit
      this.submitHandler(this.model)
        .then(
          // postSubmit
          action(r => {
            this.busy = false
          })
        )
        .catch(
          action(r => {
            this.busy = false
          })
        )
    }
  }
}

export default ViewModel
