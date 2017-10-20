import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Firebase from '../config/firebaseConfig';
import { connect } from 'react-redux';
import { logout } from '../actions';

class AccountButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
        };
    }
    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };
    handleRequestClose = () => {
        this.setState({ open: false });
    };
    handleRequestLogout = () =>{
        Firebase.app.auth().signOut();
        this.props.onLogout();
        
        //TODO:페이지를 메인으로 던진다 -> route 쪽을 다시 짜야 함 <Redirect/>로
    }
    
    
    render() {
        return (
          <div>
            <Button
              aria-owns={this.state.open ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              color="contrast"
            >
              {this.props.user.displayName}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}
            >
              <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
              <MenuItem onClick={this.handleRequestLogout}>Logout</MenuItem>
            </Menu>
          </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  }
}


export default connect(null, mapDispatchToProps)(AccountButton);