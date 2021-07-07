import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    marginRight: "25px",
    marginLeft: "25px"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  box: {
    marginTop: "10px",
    width: "410px",
    position: "absolute",
    backgoundColor: "white"
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs(props) {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.box}>
      <Link color="inherit" href="/" onClick={props.display3} className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={props.display1}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Tracks
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={props.display2}
        className={classes.link}
      >
        <GrainIcon className={classes.icon} />
        Artists
      </Link>
    </Breadcrumbs>
  );
}