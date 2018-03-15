import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import ScreensCompanies from './Companies'

const ScreensRoot = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ScreensCompanies} />
    </Switch>
  </BrowserRouter>
)

export default ScreensRoot
