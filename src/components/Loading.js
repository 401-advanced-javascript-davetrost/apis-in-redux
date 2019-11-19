import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';      

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};
