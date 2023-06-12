import './Style/Content.css';
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import routes from '../route-config'
import configureValidations from '../Validations';

configureValidations();

function Content() {
    return (
        <div className="container">
            <div className="custon-container">
                <div className="form-container"> 
                    {
                        <Switch>
                            {
                            routes.map( route => 
                                <Route key={route.path} path={route.path} exact={route.exact}>
                                    <route.component />
                                </Route>)
                            }
                        </Switch>                 
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;
