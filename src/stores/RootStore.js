import { inject } from 'mobx-react'
import RouteStore from '../stores/RouteStore'
import HistoryStore from '../routing/History'

class RootStore {
  constructor() {
    this.routeStore = new RouteStore()
    this.historyStore = new HistoryStore()
  }
}

export default RootStore

export const injectRouteStore = component =>
  inject(({ rootStore }) => ({
    routeStore: rootStore.routeStore,
  }))(component)
