import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';      
import styles from './Header.css';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    paddingLeft: '2%'
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={styles.HeaderBackground}>
      <header className={classes.root}>
        <Typography variant="h3" gutterBottom>
          API Central!
        </Typography>
        <Typography variant="h4" gutterBottom>
          brought to you by: React, Redux & Material UI
        </Typography>
      </header>
    </div>
  );
};
