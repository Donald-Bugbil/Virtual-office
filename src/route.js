import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import OfficeDetail from './components/officeDetail.js';
import App from './App.js';
import UpdatePage from './components/update';



const MainRouter = () =>{
        return (
            <Router>
                 <Switch>
                    <Route path='/update/:department' component={UpdatePage}/>
                </Switch>
                <Switch>
                    <Route exact path='/:department' component={OfficeDetail}/>
                </Switch>
                <Switch>
                    <Route exact path='/' component={App}/>
                </Switch>
            </Router>
        )   
}

export default MainRouter;