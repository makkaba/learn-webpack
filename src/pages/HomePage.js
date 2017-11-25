import MainLayout from '../containers/MainLayout';
import React, { Component } from 'react';
import Firebase from '../config/firebaseConfig';
import categoryItems from '../mock/categoryItems.json';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

//TODO: grid card, style card, make it link. 
class homePage extends Component{
  constructor(props){
    super(props);
    this.state = {
        categories: []
    };
  }
  
  componentDidMount(){
      this.fetchCategories();
  }
  
  fetchCategories(){
      this.setState({categories: categoryItems.data});
  }
  
  render(){
      // const { categories } = this.state;
    return (
        <MainLayout>
            <div>
                <h1>home page!</h1>
                
                <div>
                    {this.state.categories.map((category, index) => {
                        return (
                            <Card key={index}>
                                <CardContent>
                                    {category.name}
                                </CardContent>
                                <CardActions>
                                    <Button dense>Learn More</Button>
                                </CardActions>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </MainLayout>
      
    );
  }
  
}

export default homePage;