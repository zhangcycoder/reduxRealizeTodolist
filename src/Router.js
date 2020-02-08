import React, { Component } from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'

import Home from './page/Home'
export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Home/>
               
            </HashRouter>
        )
    }
}
