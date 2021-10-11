import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OfficeDetail from './components/officeDetail.js';
import App from './App.js';



class MainRouter extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path='/:department' component={OfficeDetail}/>
                </Switch>
                <Switch>
                    <Route exact path='/' component={App}/>
                </Switch>
            </Router>
        )
    }
}

export default MainRouter;