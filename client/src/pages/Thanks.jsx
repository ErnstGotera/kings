import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { clearCart } from '../redux/cart/actions';

const useStyles = makeStyles({
  root: {
    width: 355,
    margin: 'auto',
  },
});

export default function Thanks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const classes = useStyles();
  const { name } = useParams();
  const history = useHistory();
  const order = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4' component='h2'>
          Thanks for your purchase
        </Typography>
        <Typography variant='body1' component='p'>
          {name}, we have created your order with the code #
          {order.toUpperCase()}. Your items will be soon at your door.
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => history.push('/')} size='small'>
          Back to shopping
        </Button>
      </CardActions>
    </Card>
  );
}
