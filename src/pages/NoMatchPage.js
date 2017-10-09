import MainLayout from '../containers/MainLayout';
import React, { Component } from 'react';


class NoMatchPage extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return (
        <MainLayout>
            <div>
              <h1>SORRY, PAGE NOT FOUND!</h1>
            </div>
        </MainLayout>
    );
  }
  
}

export default NoMatchPage;