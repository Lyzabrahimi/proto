import React from 'react'
import { makeStyles,Divider,TextField ,Box} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom:20,
    },
   
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    textAdd:{
borderBottom:'none',
    },
  }));



export default function AddPub() {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
      

      
      <Divider />

      <CardContent>
        <h1 style={{ color:"black"

              }}>Ajouter une Publication</h1>
        <Divider/>
        <Box display="flex"alignItems="center"
        style={{height:100
        }}
        
        >
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
          
            <TextField
              className={classes.textAdd}
              style={{ marginLeft: 25
              }}
              placeholder="Ajoutez un text"
              fullWidth
              
            />
          
        </Box>
      </CardContent>
      <Divider />
      <CardActions 
      style={{ marginLeft: 10 , marginRight:10,
      }}
      >
        <IconButton aria-label="">
          <AddPhotoAlternateIcon />
          <Typography> Photo/Vidéo</Typography>
        </IconButton>
        <IconButton aria-label="">
          <InsertEmoticonIcon/>
          <Typography> Réaction</Typography>
        </IconButton>
        <IconButton aria-label="">
          <AttachFileIcon/>
          <Typography> Fichier</Typography>
        </IconButton>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
       Partager
      </Button>
      </CardActions>
    </Card>
    )
}
