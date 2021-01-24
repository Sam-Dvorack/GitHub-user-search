import React from 'react';
import {
  Card,
  makeStyles,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

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