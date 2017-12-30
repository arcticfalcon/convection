import { autorun, observable, computed, action, toJS, extendObservable, autorunAsync } from 'mobx'
import set from 'lodash/set'
import get from 'lodash/get'
import omit from 'lodash/omit'
import debounce from 'lodash/debounce'
import { nonenumerable } from 'core-decorators'

import { validate } from 'class-validator'

// function WithViewModel(target) {
class ViewModel {
  @nonenumerable
  @observable
  busy = false

  @observable touched = []

  @observable model

  fetch
  post

  constructor(model, fetch, post) {
    this.model = model
    this.fetch = fetch
    this.post = post
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

    if (this.model.validate) {
      this.debouncedValidate(path)
    }
  }

  getProp = path => get(this.model, path)

  debouncedValidate = debounce(path => this.model.validate(path), 500)

  val = () => {
    validate(this.model).then(errors => {
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors)
      } else {
        console.log('validation succeed')
      }
    })
  }

  @computed
  get modelJSON() {
    return toJS(this.model)
  }

  @action
  init(routeParams) {
    this.busy = true
    this.fetch(routeParams).then(this.fetchSuccess)
  }

  @action
  fetchSuccess = ({ data }) => {
    // data.name = Name.fromJSON(data.name) ///////////////////////////////
    extendObservable(this.model, data)
    this.busy = false
  }

  @action
  submit = () => {
    // if (this.model.validate) {
    //   this.model.validate()
    // }
    this.val()

    console.log('submitting', this.modelJSON)

    if (this.isValid) {
      this.busy = true
      // preSubmit
      this.post(toJS(this.model)).then(
        // postSubmit
        action(r => {
          this.busy = false
          console.log(r)
        })
      )
    }
  }
}

// ViewModel.displayName = `WithViewModel(${target.displayName || target.name})`
//
// return ViewModel
// }

export default ViewModel
