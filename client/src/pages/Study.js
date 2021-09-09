   
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Study() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Grid container spacing={24}>
        <Grid item md={3}>

        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                1
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="What is React?"
          />
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/1600x900/?calming"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Expand for answer
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
          
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Answer:</Typography>
              <Typography paragraph>
              React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. 
        React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Grid>

        

    <Grid item md={3}> 

    <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="How does React work?"
    />
    <CardMedia
      className={classes.media}
      image="https://source.unsplash.com/1600x900/?nature"
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        Expand for answer
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
    
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Answer:</Typography>
        <Typography paragraph>
        React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. 
        React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture
        </Typography>
      </CardContent>
    </Collapse>
    </Card>
    </Grid>

    <Grid item md={3}>

        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="What is React?"
          />
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/1600x900/?trees"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Expand for answer
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
          
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Answer:</Typography>
              <Typography paragraph>
              React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. 
        React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Grid>

        <Grid item md={3}>

        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="What is React?"
          />
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/1600x900/?puppies"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Expand for answer
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
          
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Answer:</Typography>
              <Typography paragraph>
              React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. 
        React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Grid>

    </Grid>

    </>
  );
}
