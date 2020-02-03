import { createStore, combineReducers } from 'redux'
import feedReducer from './reducers/feed.reducers'

const reducers = combineReducers({
    feed: feedReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig