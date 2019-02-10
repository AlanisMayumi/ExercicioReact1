import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dorama from '../../Containers/Doramas/index'
import SingleDorama from '../../Containers/SingleDorama/index'

const Main = props =>(
    <Switch>
        <Route exact path="/" component={Dorama} />
        <Route path="/Doramas/:id" component={SingleDorama}/>
        {/* para acessar o segundo caminho basta digitar: "localhost/Doramas/123565" */}
    </Switch>
)
export default Main;