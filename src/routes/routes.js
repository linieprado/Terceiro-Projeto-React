import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'
import Busca from '../pages/Busca'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Simpsons' component={Simpsons} />
                <Route path='/Busca' component={Busca} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes