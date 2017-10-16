import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

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
              <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
            </Menu>
          </div>
        );
    }
}

export default AccountButton;