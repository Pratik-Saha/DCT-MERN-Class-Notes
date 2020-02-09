import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Home from './components/static/Home'

import UserForm from './components/users/form'

import ShowDashboard from './components/admin/dashboard'
import ShowAllFrontEndDevelopers from './components/admin/ShowAllFrontEndDevelopers'
import ShowAllFullStackDevelopers from './components/admin/ShowAllFullStackDevelopes'
import ShowAllNodeJSDevelopers from './components/admin/ShowAllNodeJSDevelopers'
import ShowAllMeanStackDevelopers from './components/admin/ShowAllMeanStackDevelopers'
function App(props){
    return(
        <BrowserRouter>
            <div>
            <h2>Job Portal</h2><hr />
            <Link to = "/home">HOME | </Link>
            <Link to = "/user">USER | </Link>
            <Link to = "/admin">ADMIN | </Link>

            <Route path = "/home" component = { Home }/>
            <Route path = "/user" component = { UserForm } />
            <Route path = "/admin" component = { ShowDashboard }/>
            <Route path = "/admin/front-end-developers" component = { ShowAllFrontEndDevelopers }/>
            <Route path = "/admin/full-stack-developers" component = { ShowAllFullStackDevelopers }/>
            <Route path = "/admin/node-js-developers" component = { ShowAllNodeJSDevelopers }/>
            <Route path = "/admin/mean-stack-developers" component = { ShowAllMeanStackDevelopers }/>
            </div>
        </BrowserRouter>
    )
}

export default App