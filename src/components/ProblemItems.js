import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
    marginBottom: 24
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
});


//TODO: 넘겨받은 data를 map으로 돌려서 리턴.
function ProblemItems(props) {
    const { classes } = props;
    const { data } = props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            {data.map(problem => (
                  <Card className={classes.card} key={problem.id}>
                    <CardContent>
                      <Typography type="body1" className={classes.title}>
                        Word of the Day
                      </Typography>
                      <Typography type="headline" component="h2">
                        {problem.title}
                      </Typography>
                      <Typography type="body1" className={classes.pos}>
                        adjective
                      </Typography>
                      <Typography component="p">
                        well meaning and kindly.<br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button dense>Learn More</Button>
                      <div className={classes.flexGrow}></div>
                      <Button raised color="accent" className={classes.button}>
                          풀어보기
                      </Button>
                    </CardActions>
                  </Card>
            ))}
        </div>
    );
}


export default withStyles(styles)(ProblemItems);