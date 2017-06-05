import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import{
  LoginWeb,
  RegWeb
}from './containers/index'

import {
  App,
  Home,
  Login,
  Payment,
  History,
  Notification,
  Settings,
  About,
} from './components'


export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
            <IndexRoute component={Home} />



            <route path ='login'>
              <IndexRoute component={LoginWeb}/>
            </route>

           <route path ='register'>
              <IndexRoute component={RegWeb}/>
            </route>

           <route path ='history'>
              <IndexRoute component={History}/>
            </route>

           <route path ='payment'>
              <IndexRoute component={Payment}/>
            </route>

           <route path ='notification'>
              <IndexRoute component={Notification}/>
            </route>

           <route path ='settings'>
              <IndexRoute component={Settings}/>
            </route>
           <route path ='about'>
              <IndexRoute component={About}/>
            </route>            

      </Route>
    </Router>
  )
}