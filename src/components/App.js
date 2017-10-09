import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Firebase from '../config/firebaseConfig';
import Login from '../pages/LoginPage';
import Home from '../pages/HomePage';
import NoMatch from '../pages/NoMatchPage';

class App extends Component{
    componentDidMount(){
        
        Firebase.app.auth().onAuthStateChanged(function(user) {
            
            console.log("hello"+user);
            
        });
        
    }
    render(){
        return (
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </BrowserRouter>
        );
    }
    
}

export default App;