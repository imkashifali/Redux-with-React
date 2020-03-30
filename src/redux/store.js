import {createStore} from 'redux'
import BookReducer from './Book/BookReducer'

const store= createStore(BookReducer);

export default store;