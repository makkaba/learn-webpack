import React, {Component} from 'react';
import { connect } from 'react-redux';
import ButtonAppBar from '../components/ButtonAppBar';

class MainLayout extends Component{
    componentWillUpdate(){
        console.log("레이아웃 업데이트 직전",this.props.user);
    }
    componentDidMount(){
        console.log("레이아웃 마운트 직후",this.props.user);
    }
    render(){
        console.log("레이아웃 렌더링",this.props.user);
        let user = this.props.user.user;
        return(
            <div>
                <ButtonAppBar user={user} />
                <div>{user.displayName}</div>
                {this.props.children}
            </div>
        );
    }
}


//store에서 user 정보 state를 가져와서 이 클래스의 props로 쓸 수 있도록 할당한다.
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(MainLayout);