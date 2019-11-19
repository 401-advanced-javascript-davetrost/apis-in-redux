import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import styles from './NavTabs.css';
import { useHistory, useLocation } from 'react-router-dom';

const LinkTab = props => (
  <Tab
    component="a"
    onClick={event => {
      event.preventDefault();
    }}
    {...props}
  />
);

const ROUTER_LOCATIONS = {
  0: '/avatar',
  1: '/simpsons',
  '/avatar': 0,
  '/simpsons': 1,
};

export const NavTabs = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(ROUTER_LOCATIONS[newValue || 0]);
  };

  useEffect(() => {
    const index = ROUTER_LOCATIONS[location.pathname.toLowerCase()] || 0;
    setValue(+index);
  }, [location]);

  return (
    <div className={styles.NavTabs}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <LinkTab label="Avatar: The Last Airbender" />
          <LinkTab label="The Simpsons" />
        </Tabs>
      </AppBar>
    </div>
  );
};
