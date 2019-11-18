import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';      

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    paddingLeft: '2%'
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Typography variant="h3" gutterBottom>
          API Central!
      </Typography>
      <Typography variant="h4" gutterBottom>
        brought to you by: Redux
      </Typography>
    </header>
  );
};
