import React from 'react'
import {Provider} from 'react-redux'
import BookContainer from './components/BookContainer'
import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookContainer />
    </div>
    </Provider>
  )
}
