import React, { Component } from 'react';
import Firebase from '../config/firebaseConfig';

class App extends Component{
    componentDidMount(){
        Firebase.ui.start('#root', Firebase.uiConfig);
        Firebase.app.auth().onAuthStateChanged(function(user) {
            
            console.log("hello"+user);
        });
        
    }
    render(){
        return (
            <h1>hello</h1>
        );
    }
    
}

export default App;