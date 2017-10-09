import MainLayout from '../containers/MainLayout';
import React, { Component } from 'react';
import Firebase from '../config/firebaseConfig';
import 'firebaseui/dist/firebaseui.css';

class loginPage extends Component{
  constructor(props){
    super(props);
    console.log('dd');
  }
  
  componentDidMount(){
      Firebase.ui.start('#login-page', Firebase.uiConfig);
  }
  
  render(){
    return (
        <MainLayout>
            <div id="login-page"><h1>login page!</h1></div>
        </MainLayout>
      
    );
  }
  
}

export default loginPage;