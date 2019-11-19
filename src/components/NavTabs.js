import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './NavTabs.css';

const LinkTab = props => (
  <Tab
    component="a"
    onClick={event => {
      event.preventDefault();
    }}
    {...props}
  />
);

export const NavTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.NavTabs}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          <LinkTab label="Avatar: The Last Airbender" href="/" />
          <LinkTab label="The Simpsons" href="/" />
        </Tabs>
      </AppBar>
    </div>
  );
};
