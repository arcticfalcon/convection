import { observable, computed, action } from 'mobx'
import { validate as validateAsync, validateSync } from 'class-validator'
import flatten from 'lodash/flatten'
import values from 'lodash/values'

class ModelValidation {
  @observable errors = new Map()

  @computed
  get isValid() {
    return this.errors.size === 0
  }

  @computed
  get flatErrors() {
    return flatten(this.errors.values())
  }

  @action
  validate = path => {
    if (path) {
      this.errors.delete(path)

      return
    }

    this.errors.clear()

    validateSync(this).forEach(error => this.errors.set(error.property, error.constraints))

    // validateAsync(this.model).then(
    //   action(errors => {
    //     errors.forEach(error => this.errors.set(error.property, error.constraints))
    //   })
    // )
  }

  hasErrors = path => {
    return this.errors.has(path)
  }

  getErrors = path => {
    return values(this.errors.get(path))
  }
}

export default ModelValidation
