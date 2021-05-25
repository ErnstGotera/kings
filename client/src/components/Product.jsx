import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addItem } from '../redux/cart/actions';

const useStyles = makeStyles({
  root: {
    width: 390,
    paddingLeft: 5,
    paddingRight: 10,
  },
  title: {
    textAlign: 'center',
  },
  pos: {
    marginBottom: 2,
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Product = ({ item, addItem }) => {
  const classes = useStyles();
  const { name, category, price, description, subcategory } = item;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4' component='h3'>
          {name}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {category} {subcategory}
        </Typography>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.bottom}>
        <Button
          onClick={() => addItem(item)}
          variant='contained'
          color='primary'
        >
          Add to cart
        </Button>
        <Typography variant='h5' component='h3'>
          ${price}
        </Typography>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);
