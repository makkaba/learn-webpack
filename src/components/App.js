import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import Firebase from '../config/firebaseConfig';
import Login from '../pages/LoginPage';
import Home from '../pages/HomePage';
import Problem from '../pages/ProblemPage';
import NoMatch from '../pages/NoMatchPage';

class App extends Component{
    //TODO: async await 써보기, user 상태를 중앙에서 관리하기. 그에따라 네브바 다르게하기.
    //bind this로 교체하기
    constructor(props){
        super(props);
        
        
    }
    componentWillUpdate(){
        // const { user } = this.props;
        // console.log("App componentWillUpdate:",user);
    }
    componentDidMount(){
        // var ttt = this;
        Firebase.app.auth().onAuthStateChanged(function(user) {
            if(user){
                console.log("App이 올라갔다. 현재유저:", user.displayName);
                //this.setState({user: user});
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