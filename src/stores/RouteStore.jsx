import { observable, action } from 'mobx'
import { compile } from 'path-to-regexp'

class RouteStore {
  @observable routes = new Map()

  @action
  add = (name, location) => {
    if (this.routes.has(name)) {
      throw new Error(`Route ${name} already registered.`)
    }

    this.routes.set(name, location)
  }

  get(name, params) {
    if (!this.routes.has(name)) {
      throw new Error(`Route ${name} is not registered.`)
    }

    try {
      return compile(this.routes.get(name))(params)
    } catch (ex) {
      console.error(ex)
    }
  }
}

export default RouteStore
