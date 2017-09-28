import { autorun, observable, computed, action, toJS, extendObservable, autorunAsync } from 'mobx'
import set from 'lodash/set'
import omit from 'lodash/omit'
import keys from 'lodash/keys'
import flatten from 'lodash/flatten'

class BaseForm {
  @observable loading = false

  service
  serviceCall

  touched = []

  constructor(service, serviceCall) {
    this.service = service
    this.serviceCall = serviceCall

    autorunAsync(() => {
      this.validate()
    }, 300)
  }

  @action handleChange = (e, { name, value }) => this.setProp(name, value)

  @action
  setProp = (path, value) => {
    set(this, path, value)
    if (!this.touched.includes(path)) {
      this.touched.push(path)
    }
  }

  @action
  extend = obj => {
    // Check properties exist
    keys(obj).forEach(key => {
      if (!(key in this)) {
        throw new Error(`Property "${key}" was not declared in class inherited from BaseForm.`)
      }
    })
    extendObservable(this, obj)
  }
  @computed
  get isValid() {
    return this.errors.length === 0
  }

  @computed
  get errors() {
    return flatten(this.constructor.errorProperties.map(errorProp => this[errorProp]))
  }

  @action
  submit = () => {
    // this.loading = true

    console.log('submitting', this)

    // this.serviceCall(toJS(this)).then()
    // setTimeout(() => (this.loading = false), 1000)
  }

  @action validate = () => {}

  hasErrors = path => !!this[`${path}Errors`].length

  isTouched = path => (path ? this.touched.includes(path) : this.touched.length > 0)

  @computed
  get json() {
    return omit(toJS(this), ['service', 'serviceCall', 'loading'])
  }
}

export default BaseForm
