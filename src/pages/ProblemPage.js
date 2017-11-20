import MainLayout from '../containers/MainLayout';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import katex from 'katex';
// import * as MathJax from 'mathjax';
import 'katex/dist/katex.css';

const tex = 'a + b';


class ProblemPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: {
                __html: null
            }
        };
    }
    
    componentDidMount(){
        const renderedText = {__html:
            katex.renderToString("\thello\tc = \\pm\\sqrt{a^2 + b^2}\thello")
        };
        this.setState({
            content: renderedText
        });
    }
    render(){
        
       return (
           <MainLayout>
                <div dangerouslySetInnerHTML={this.state.content}>
                </div>
            </MainLayout>
         
       );
    }
  
}

export default ProblemPage;