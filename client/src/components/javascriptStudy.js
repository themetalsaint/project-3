import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import StudyNav from './studyNav'
import Navbar from './navbar';
import "./stars.scss";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({

  bgImage:{
    minWidth: 100,
    minHeight: 1000,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  root: {
    opacity: 0.7,
    maxWidth: 450,
    marginTop: 55,
    marginLeft: 250,
    paddingTop: 50,
    paddingBottom: 50,
  },
  media: {
    height: 0,
    paddingTop: '45%', // 16:9,
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
}));

export default function ReviewCard() {
  const classes = useStyles();
 


  return (
    
<>
{/* <div className={classes.bgImage} style={{
  backgroundImage: `url("https://www.teahub.io/photos/full/252-2524172_calm-wallpaper-calm-blue-ocean-background.jpg")`
}}> */}
  <Navbar />
  <div id="home" className="intro route bg-image background">
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    
    
    
       
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          
          <Typography className={classes.heading}>
            What is React?</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. 
          React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          >
          <Typography className={classes.heading}>How does react work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. 
          The second step is reconciliation, where it updates the DOM with the results of diff.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          >
          <Typography className={classes.heading}>How does react work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. 
          The second step is reconciliation, where it updates the DOM with the results of diff.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          >
          <Typography className={classes.heading}>How does react work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. 
          The second step is reconciliation, where it updates the DOM with the results of diff.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          >
          <Typography className={classes.heading}>How does react work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. 
          The second step is reconciliation, where it updates the DOM with the results of diff.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
    <StudyNav className={classes.navStyle} />
    <div>
    <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Take your time",
                      "Don't Worry",
                      "Take a break"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>


    </div>
    
    </div>
<div/>
      
    </>
  );
}