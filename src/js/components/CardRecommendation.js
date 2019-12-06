import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CardRecommendation(props) {
  const classes = useStyles();
  const {
    image,
    name,
    brand,
    category,
    price,
    color,
    id } = props.product;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image+'?'+(Math.random()*1000)%20}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Categoria: {category}
            <br />
            Marca: {brand}
            <br />
            R$: {price}
            <canvas
              width="20px"
              height="20px"
              style={{ marginLeft: "20px", backgroundColor: color,borderRadius:'5px' }}
            ></canvas>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/product/${id}`}>
            <Button size="small" color="primary">
            Acessar
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}