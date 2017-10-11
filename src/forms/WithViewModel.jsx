import { autorun, observable, computed, action, toJS, extendObservable, autorunAsync } from 'mobx'
import set from 'lodash/set'
import omit from 'lodash/omit'
import debounce from 'lodash/debounce'
import { nonenumerable } from 'core-decorators'

function WithViewModel(target) {
  class ViewModel extends target {
    @nonenumerable
    @observable
    busy = false

    @observable touched = []

    isTouched = path => (path ? this.touched.includes(path) : this.touched.length > 0)

    @action
    handleChange = (e, { name, value }) => {
      this.setProp(name, value)
    }

    @action
    setProp = (path, value) => {
      set(this, path, value)
      if (!this.touched.includes(path)) {
        this.touched.push(path)
      }

      if (this.validate) {
        this.debouncedValidate(path)
      }
    }

    debouncedValidate = debounce(path => this.validate(path), 500)

    @computed
    get json() {
      return omit(toJS(this), ['busy'])
    }
  }

  ViewModel.displayName = `WithViewModel(${target.displayName || target.name})`

  return ViewModel
}

export default WithViewModel
