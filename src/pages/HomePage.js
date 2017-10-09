import MainLayout from '../containers/MainLayout';
import React, { Component } from 'react';
import Firebase from '../config/firebaseConfig';

class homePage extends Component{
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
      
  }
  
  render(){
    return (
        <MainLayout>
            <div><h1>home page!</h1></div>
        </MainLayout>
      
    );
  }
  
}

export default homePage;