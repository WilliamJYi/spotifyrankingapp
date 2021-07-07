import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { v4 as uuidv4 } from 'uuid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Last 4 Weeks" {...a11yProps(0)} />
          <Tab label="Last 6 Months" {...a11yProps(1)} />
          <Tab label="All Time" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        <TabPanel value={value} index={0} dir={theme.direction} className="tracks">
          {console.log(props.type)}
          {props.type === "track" ? 
            props.list1.map((item,id) => 
              <div key={uuidv4()} className="track">
                  <p className="rank">{id + 1}</p>
                  <img src={item.album.images[0].url} alt="cover" width="100"/>
                  <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="trackName">{item.name}</a>
                  <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artistName">{item.artists[0].name}</a>
              </div>) :
            props.list4.map((item,id) =>
              <div key={uuidv4()} className="track">
                  <p className="rank">{id + 1}</p>
                  <img src={item.images[0].url} alt="cover" width="100"/>
                  <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="trackName">{item.name}</a>
              </div>)
          }
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className="tracks">
          {props.type === "track" ? 
            props.list2.map((item,id) => 
              <div key={uuidv4()} className="track">
                  <p className="rank">{id + 1}</p>
                  <img src={item.album.images[0].url} alt="cover" width="100"/>
                  <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="trackName">{item.name}</a>
                  <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artistName">{item.artists[0].name}</a>
              </div>) :
              props.list5.map((item,id) =>
              <div key={uuidv4()} className="track">
                  <p className="rank">{id + 1}</p>
                  <img src={item.images[0].url} alt="cover" width="100"/>
                  <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="trackName">{item.name}</a>
              </div>)
          }
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} className="tracks">
          {props.type === "track" ? 
            props.list3.map((item,id) => 
              <div key={uuidv4()} className="track">
                  <p className="rank">{id + 1}</p>
                  <img src={item.album.images[0].url} alt="cover" width="100"/>
                  <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="trackName">{item.name}</a>
                  <a href={item.artists[0].external_urls.spotify} target="_blank" rel="noopener noreferrer" className="artistName">{item.artists[0].name}</a>
              </div>) :
              props.list6.map((item,id) =>
              <div key={uuidv4()} className="track">
                  <p className="rank">{id + 1}</p>
                  <img src={item.images[0].url} alt="cover" width="100"/>
                  <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="trackName">{item.name}</a>
              </div>)
          }
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}