import { autorun, observable, computed, action, toJS, extendObservable, autorunAsync } from 'mobx'
import get from 'lodash/get'

function WithValidation(target) {
  class ValidationModel extends target {
    @observable errors = new Map()

    @computed
    get isValid() {
      return this.errors.size === 0
    }

    @computed
    get flatErrors() {
      return this.errors.values()
    }

    @action
    validate = path => {
      if (path) {
        this.errors.delete(path)
        if (this.constructor.__validators.has(path)) {
          this.validatePath(this.constructor.__validators.get(path), path)
        }
        return
      }

      this.errors.clear()
      this.constructor.__validators.forEach(this.validatePath)
    }

    validatePath = (validators, path) => {
      validators.forEach(validator => {
        const error = validator(get(this, path))
        if (error) {
          this.errors.set(path, error)
        }
      })
    }

    hasErrors = path => {
      return this.errors.has(path)
    }

    getErrors = path => {
      return this.errors.get(path)
    }
  }

  ValidationModel.displayName = `WithValidation(${target.displayName || target.name})`

  return ValidationModel
}

export default WithValidation
