import { computed, observable } from 'mobx'
import concat from 'lodash/concat'

// function defineComputedProperty(target, name, descriptor) {
//   Object.defineProperty(target, name, descriptor)
//   computed(target, name, descriptor)
// }
//
// function getPropertyDescriptor(obj, property) {
//   if (obj == null) return null
//
//   if (obj.hasOwnProperty(property)) return Object.getOwnPropertyDescriptor(obj, property)
//   else return getPropertyDescriptor(Object.getPrototypeOf(obj), property)
// }

export default function validate(func, message) {
  const validator = value => {
    return func(value) ? undefined : message
  }

  return function(target, name, descriptor) {
    // const computedValidationName = `${name}Errors`
    //
    // const previousValidator = getPropertyDescriptor(target, computedValidationName)
    //
    // if(previousValidator) {
    //   const method = previousValidator.get
    //
    //   previousValidator.get = function asd(...args) {
    //     const previousReturn = method.apply(this, args)
    //     const newReturn = newValidator.get.apply(this, args)
    //
    //     console.log(concat(previousReturn, newReturn))
    //
    //     if(previousReturn || newReturn) {
    //       return [...previousReturn, ...newReturn]
    //     }
    //   }
    //
    //   previousValidator.configurable = true
    //   defineComputedProperty(target, computedValidationName, previousValidator)
    // }
    //
    // const newValidator = {
    //   configurable: true,
    //   enumerable: false,
    //   get: function getter() {
    //
    //     // console.log('computing vals for ' +name)
    //     // return [val => 'validador 1', val => 'validator 2'].map(validator => validator(this[name]))
    //
    //
    //     let previousReturn
    //     if (previousValidator) {
    //       previousReturn = previousValidator.get.apply(this, args)
    //     }
    //
    //     const newReturn = test(this[name], this)
    //
    //     return concat(previousReturn, newReturn).filter(value => value !== undefined)
    //   },
    // }
    //
    // defineComputedProperty(target, computedValidationName, newValidator)

    const classConstructor = target.constructor

    // Add validator
    if (!classConstructor.hasOwnProperty('__validators')) {
      Object.defineProperty(classConstructor, '__validators', {
        configurable: true,
        enumerable: false,
        value: observable(new Map()),
      })
    }

    if (!classConstructor.__validators.has(name)) {
      classConstructor.__validators.set(name, [])
    }
    classConstructor.__validators.get(name).push(validator)
  }
}
