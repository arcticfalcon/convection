import { observable, action, observe } from 'mobx'
import invariant from 'invariant'
import { compile } from 'path-to-regexp'

export default class HistoryStore {
  @observable location = null

  history = null

  @action
  _updateLocation(newState) {
    this.location = newState
  }

  // build = (location, params) => {
  //   console.log(location, params)
  //   // let name
  //   // if (typeof location === 'string') {
  //   //   if (location[0] !== '/') {
  //   //     name = location
  //   //   }
  //   // } else {
  //   //   name = location.name
  //   // }
  //   // if (!name) {
  //   //   return location
  //   // }
  //
  //   const route = routes[location]
  //   invariant(route, 'Unknown route: %s', location)
  //
  //   return {
  //     // ...location,
  //     pathname: compile(route)(params),
  //   }
  // }

  // ToDo: move to RouteStore?
  build = (route, params) => {
    return {
      ...params,
      pathname: compile(route)(params),
    }
  }

  /*
   * History methods
   */
  push = (location, params) => {
    this.history.push(this.build(location, params))
  }
  replace = (location, params) => {
    this.history.replace(this.build(location, params))
  }
  go = n => {
    this.history.go(n)
  }
  goBack = () => {
    this.history.goBack()
  }
  goForward = () => {
    this.history.goForward()
  }

  //   function createPath(location) {
  //   return history.createPath(resolveLocation(location));
  // }
  //
  //   function createHref(location) {
  //   return history.createHref(resolveLocation(location));
  // }
  //
  //   function createLocation(location, ...args) {
  //   return history.createLocation(resolveLocation(location), ...args);
  // }
}

export const syncHistoryWithStore = (history, store) => {
  // Initialise store
  store.history = history

  // Handle update from history object
  const handleLocationChange = location => {
    store._updateLocation(location)
  }

  const unsubscribeFromHistory = history.listen(handleLocationChange)
  handleLocationChange(history.location)

  const subscribe = listener => {
    const onStoreChange = change => {
      const rawLocation = { ...store.location }
      listener(rawLocation, history.action)
    }

    // Listen for changes to location state in store
    const unsubscribeFromStore = observe(store, 'location', onStoreChange)

    listener(store.location, history.action)

    return () => {
      unsubscribeFromStore()
    }
  }
  const unsubscribe = () => unsubscribeFromHistory()

  history.subscribe = subscribe
  history.unsubscribe = unsubscribe

  return history
}
