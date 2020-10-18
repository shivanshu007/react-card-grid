import React, {useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width : "auto",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [Name,setName]= useState(props.data.data[1]);
  const [type1, setType1] = useState(props.data.data[2])
  const [type2, setType2] = useState(props.data.data[3])
  const [total, setTotal] = useState(props.data.data[4])
  const [hp, setHp] = useState(props.data.data[5])
  const [attack, setAttack] = useState(props.data.data[6])
  const [defense, setDefense] = useState(props.data.data[7])
  const [specialAttack, setSpecialAttack] = useState(props.data.data[8])
  const [specialDefense, setSpecialDefense] = useState(props.data.data[9])
  const [speed, setSpeed] = useState(props.data.data[10])
  const [Generation, setGenration] = useState(props.data.data[11])
  const [Legendary, setlegendary] = useState(props.data.data[12])


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/pokemon.png"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type 1 - <b>{type1}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type 2 - <b>{type2}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Total - <b>{total}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            HP - <b>{hp}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Attack - <b>{attack}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Defense - <b>{defense}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Special Attack - <b>{specialAttack}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Special Defense - <b>{specialDefense}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Speed - <b>{speed}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Generation - <b>{Generation}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Legendary - <b>{Legendary}</b>
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
