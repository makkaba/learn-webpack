
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui-icons/Home';
import AccountButton from './AccountButton';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Grid container spacing={24}>
              <Grid item sm={2}></Grid>
              <Grid item xs={12} sm={8}>
                  <Toolbar>
                      <Link to='/' style={{ textDecoration: 'none' }}>
                          <Button color="contrast">JustPick</Button>
                      </Link>
                    <div className={classes.flex}></div>
                    {
                        props.user ? <AccountButton user={props.user} /> :
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <Button color="contrast">로그인</Button>
                        </Link>
                    }

                  </Toolbar>
              </Grid>
              <Grid item sm={2}></Grid>
          </Grid>
        
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);