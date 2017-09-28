import { observable, action } from 'mobx'

class RouteStore {
  @observable routes = new Map()

  @action
  add = (name, location) => {
    if (this.routes.has(name)) {
      throw new Error(`Route ${name} already registered.`)
    }

    this.routes.set(name, location)
  }
}

export default RouteStore
