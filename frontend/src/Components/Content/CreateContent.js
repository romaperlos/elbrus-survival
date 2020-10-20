import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import ContentMain from './ContentMain';
import { Link, Route } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 318,
  },
  description: {
    height: 318,
  },
  action: {
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  plusBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

function CreateContent() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.description}>
            <Typography className={classes.plusBtn}>
              Create content
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </>
  );
}

export default CreateContent;
