import { intercept } from 'mobx'

const sanitizers = new Map()

export default function sanitize(sanitizer) {
  if (!sanitizer) {
    throw new Error('@sanitize must be called with sanitizer argument')
  }

  return (target, property, description) => {
    if (!sanitizers.has(target.constructor)) {
      sanitizers.set(target.constructor, [])
    }

    sanitizers.get(target.constructor).push(function(object) {
      intercept(object, property, change => {
        change.newValue = sanitizer(change.newValue)

        return change
      })
    })
  }
}

export function initSanitizers(object) {
  // Probably does not work with class inheritance
  sanitizers.get(object.constructor).forEach(init => init(object))
}
