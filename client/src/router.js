import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './components/pages/login/login'
import Register from './components/pages/register/register'
import Index from './components/pages/home/index'
import Dashboard from './components/pages/dashboard/dashboard'
// mustard ft richy rodd - ballin
import './components/css/home.css'
import './components/css/reg.css'
export default class router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact={true} strict component={Index} />
                    <Route path="/login" exact={true} strict component={Login} />
                    <Route path="/register" exact={true} strict component={Register} />
                    <Route path="/dashboard" exact={true} strict component={Dashboard} />
                </Switch>
            </div>
        )
    }
}
