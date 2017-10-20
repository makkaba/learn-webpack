import MainLayout from '../containers/MainLayout';
import React, { Component } from 'react';
import katex from 'katex';
import 'katex/dist/katex.css';


class ProblemPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            latex: {
                __html: ''
            }
        };
    }
    
    componentDidMount(){
        const text = {__html:
            katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}")
        };
        this.setState({
            latex: text
        });
    }
    render(){
        return (
            <MainLayout>
                <div dangerouslySetInnerHTML={this.state.latex}>
                </div>
            </MainLayout>
          
        );
    }
  
}

export default ProblemPage;