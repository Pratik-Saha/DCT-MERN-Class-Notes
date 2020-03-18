import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from  './components/static/Home'
import Users from './components/user/Users'
import ShowUserPage from  './components/user/ShowUserPage'
import ShowUserPost from './components/user/ShowUserPost'
import ShowPostPage from './components/post/ShowPostPage'

function App(props){
    return(
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand">Blogger-UI</Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to = "/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "/users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "/posts">Posts</Link>
                        </li>
                    </ul> 
                </nav>

                <div className="container">
                    <Route path = "/home" component = {Home} />
                    <Route path = "/users" component = {Users}  exact = {true}/>
                    <Route path = "/users/:id" component = {ShowUserPage} />
                    <Route path ="/posts" component = {ShowPostPage} exact = {true} />
                    <Route path = "/posts/:id" component = {ShowUserPost} />
                </div>
            
            </div>
        </BrowserRouter>
    )
}

export default App