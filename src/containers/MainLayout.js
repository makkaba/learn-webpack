import React , {Component} from 'react';

class mainLayout extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}
export default mainLayout;