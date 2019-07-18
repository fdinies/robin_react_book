import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App'
//import App from './ExplainBindingsComponent'
import App from './HackerNews'

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
//ReactDOM.render(<ExplainBindingsComponent />, rootElement)

if (module.hot) {
  module.hot.accept()
}
