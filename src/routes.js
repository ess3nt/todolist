/**
 * Created by Igor on 28.10.2016.
 */
import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'


export const routes = (
    <div>
        <Route path='/(:filter)' component={App} />
    </div>
)