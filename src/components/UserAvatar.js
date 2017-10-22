
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  }
};

function UserAvatar(props) {
  const { classes } = props;
  const { user } = props;
  
  return (
    <div className={classes.row}>
      <Avatar 
          alt={user.displayName} 
          src={user.photoURL} 
          className={classes.avatar} 
      />
    </div>
  );
}

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);