import MainLayout from '../containers/MainLayout';
import React, { Component } from 'react';
import Firebase from '../config/firebaseConfig';
import categoryItems from '../mock/categoryItems.json';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import '../styles/category.scss';

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
                    <Grid container spacing={24} className="category-container">
                    {this.state.categories.map((category, index) => {
                        return (
                                <Grid item xs={6}>
                                    <Card key={index}>
                                        <CardContent>
                                            {category.name}
                                        </CardContent>
                                        <CardActions>
                                            <Button dense>Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                        );
                    })}
                    </Grid>
                </div>
            </div>
        </MainLayout>
      
    );
  }
  
}

export default homePage;