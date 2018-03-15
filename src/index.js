import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bulma/css/bulma.css'
import { Provider } from 'react-redux'
import ScreensRoot from './screens/Root'
import registerServiceWorker from './registerServiceWorker'
import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import { companies } from './store/models'

const store = init({
  plugins: [createLoadingPlugin()],
  models: {
    companies
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ScreensRoot />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
