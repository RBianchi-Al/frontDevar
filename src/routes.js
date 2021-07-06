import React from "react";

import {Switch, Route} from 'react-router-dom';
import { Classes } from "./components/Classes";
import { Header } from "./components/Header";

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/api/classes" component={Classes}/>
            <Route exact path="/login" component={Header}/>

        </Switch>  
    );
}

