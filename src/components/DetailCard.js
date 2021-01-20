import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { SelectedUser } from '../redux/actions/SelectedUser';

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 300
  },
});

const DetailCard = ({
  image,
  name,
  gitHubProfile,
  user,
  history
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onMoreInfoClick = () => {
    // Dispatch action.
    dispatch(SelectedUser(user));

    // Navigate.
    history.push('/user');
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => window.location.href = gitHubProfile}>
        <CardMedia
          component="img"
          alt={name}
          height="180"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => window.location.href = gitHubProfile} size="small" color="primary">
          GitHub Profile
        </Button>
        <Button onClick={onMoreInfoClick} size="small" color="primary">
          More Info
        </Button>
      </CardActions>
    </Card>
  );
};

export default DetailCard;