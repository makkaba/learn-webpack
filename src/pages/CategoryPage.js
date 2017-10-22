import MainLayout from '../containers/MainLayout';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { CategoryItems } from '../data/CategoryItems';
import ProblemItems from '../components/ProblemItems';
import { problems } from '../mock/problems';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    padding: 24
  }
});

const { data } = problems;

function CategoryPage(props){
    const { classes } = props;
    //data는 어떻게 넘겨주지?
    return (
        <MainLayout>
            <div>
                <div className={classes.root}>
                     <Grid container spacing={24}>
                       <Grid item xs={12} sm={2}>
                       <List>
                          {CategoryItems}
                        </List>
                       </Grid>
                       <Grid item xs={12} sm={10}>
                         <ProblemItems data={data}/>
                       </Grid>
                     </Grid>
                   </div>
            </div>
        </MainLayout>
      
    );
}

CategoryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryPage);