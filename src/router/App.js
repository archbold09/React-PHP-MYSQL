import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import Login from '../containers/Login'
import ForgotPassword from '../containers/ForgotPassword'
import NotFound from '../containers/NotFound'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/forgotPassword" component={ForgotPassword}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  </Router>
)

export default App
