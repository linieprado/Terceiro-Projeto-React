import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'
import DragonBall from '../pages/DragonBall'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Simpsons' component={Simpsons} />
                <Route path='/DragonBall' component={DragonBall} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes