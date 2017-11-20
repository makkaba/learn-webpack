import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import Firebase from '../config/firebaseConfig';
import Login from '../pages/LoginPage';
import Home from '../pages/HomePage';
import Problem from '../pages/ProblemPage';
import NoMatch from '../pages/NoMatchPage';
import Category from '../pages/CategoryPage';
import axios from 'axios';

const client = axios.create({
  baseURL: "http://localhost:5000"
});

class App extends Component{
    //TODO: async await 써보기, user 상태를 중앙에서 관리하기. 그에따라 네브바 다르게하기.
    //bind this로 교체하기
    constructor(props){
        super(props);
    }
    componentWillUpdate(){
        // const { user } = this.props;
    }
    componentDidMount(){
        //로그인 시켜줄지 말지 결정.
        Firebase.app.auth().onAuthStateChanged(function(user) {
            if(user){
                console.log(user);
                //this.setState({user: user});
                Firebase.app.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                  // Send token to your backend via HTTPS
                  // ...
                  console.log(idToken);
                  //서버에 보내서 있으면 유저정보를 리턴하고 토큰을 로컬스토리지에 저장하고 로그인시킴.
                  //API 조회 할때는 토큰을 헤더에 넣어서 조회
                  //없으면 없다고 실패를 리턴
                  client.get(`/users?token=${idToken}`)
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                }).catch(function(error) {
                  // Handle error
                });
                this.props.onLogin(user);
            }else{
                console.log("NO user");
            }
        }.bind(this), function(error){
            console.log(error);
        });
    }
    render(){
        let { dispatch } = this.props;
        return (
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/categories" component={Category}/>
                            <Route path="/problem" component={Problem}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </BrowserRouter>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => {
      dispatch(login(user))
    }
  }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

//로그인 시 store에 user 정보를 전달한다
export default connect( mapStateToProps, mapDispatchToProps)(App);