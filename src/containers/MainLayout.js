import React , {Component} from 'react';
import ButtonAppBar from '../components/ButtonAppBar';

class mainLayout extends Component{
    render(){
        return(
            <div>
                <ButtonAppBar />
                {this.props.children}
            </div>
        );
    }
}
export default mainLayout;