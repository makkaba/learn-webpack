
import React, { Component } from 'react';
import MainLayout from '../containers/MainLayout';
import Button from 'material-ui/Button';
import Firebase from '../config/firebaseConfig';
import FirebaseCore from 'firebase';
import 'firebaseui/dist/firebaseui.css';
import '../style.scss';

const facebookStyle={
    backgroundColor: '#1976D2',
    color: 'white'
};
const googleStyle = {
    backgroundColor: '#F44336',
    color: 'white'
};

class loginPage extends Component{
  constructor(props){
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }
  
  componentDidMount(){
      // Firebase.ui.start('#login-page', Firebase.uiConfig);
  }
  
  handleSignup(){
      alert('sign up');
  }
  handleFacebookLogin(){
      var provider = new FirebaseCore.auth.FacebookAuthProvider();
      Firebase.app.auth().signInWithRedirect(provider);
  }
  handleGoogleLogin(){
      var provider = new FirebaseCore.auth.GoogleAuthProvider();
      Firebase.app.auth().signInWithRedirect(provider);
  }
  render(){
    return (
        <MainLayout>
            <div id="login-page" className="login-container">
                <h1>로그인하세요!</h1>
                <Button raised className="login-btn" onClick={this.handleSignup}>
                    Sign up
                </Button>
                <Button raised className="login-btn" style={facebookStyle} onClick={this.handleFacebookLogin}>
                    facebook
                </Button>
                <Button raised className="login-btn" style={googleStyle} onClick={this.handleGoogleLogin}>
                    google
                </Button>
            </div>
        </MainLayout>
    );
  }
  
}

export default loginPage;