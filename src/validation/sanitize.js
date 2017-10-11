import { intercept } from 'mobx'

const initializersName = '__sanitizationInitializers'

export default function sanitize(sanitizer) {
  if (!sanitizer) {
    throw new Error('@sanitize must be called with sanitizer argument')
  }

  return (target, property, description) => {
    const classConstructor = target.constructor

    target.initSanitizers = function() {
      this.constructor[initializersName].forEach(init => init(this))
    }

    if (!classConstructor.hasOwnProperty(initializersName)) {
      Object.defineProperty(classConstructor, initializersName, {
        configurable: true,
        enumerable: false,
        value: [],
      })
    }
    classConstructor[initializersName].push(function(object) {
      intercept(object, property, change => {
        change.newValue = sanitizer(change.newValue)

        return change
      })
    })
  }
}
