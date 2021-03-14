import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
 
}));

export default function Suggestions() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
      <CardHeader
      
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Evénements"
        
      />
     
      <CardContent>
      <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/face.png'} />
      <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/face.png'} />

      </CardContent>
      
      
    </Card>
        </div>
    )
}
