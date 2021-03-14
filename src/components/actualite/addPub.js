import React from 'react'
import { makeStyles,Divider,TextField ,Box,Button} from '@material-ui/core';
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
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom:20,
    },
   
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
     
    },
    textAdd:{
borderBottom:'none',
    },
    '&::before': {
      borderBottom:'none',
    }
  }));



export default function AddPub() {
    const classes = useStyles();
 
    return (
      <Card className={classes.root}>
      

      
      <CardHeader style={{paddingBottom :0 ,}}
      
       
        title="Créer un poste"
        
      >   </CardHeader>

      <CardContent>
      
        <Divider/>
        <Box display="flex"alignItems="center"
        style={{height:100
        }}
        
        >
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
          
           {/**  <TextField
              className={classes.textAdd}
              style={{ marginLeft: 25, width: 470,
              }}
              placeholder="Ajoutez un text"
              
              multiline
            />*/}
            <Typography style={{ marginLeft: 25,fontSize: 17,color:'#777d74'
              }}>Ajoutez un text ...
          
          </Typography>
          
        </Box>
      </CardContent>
      <Divider />
      <CardActions  style={{  
              }}>
        <Box>

        <IconButton aria-label="" style={{ backgroundColor: '#f5fbff', marginRight: 10,
              borderRadius:5,
                        }}
              >
              <AddPhotoAlternateIcon  style={{ color: 'darkmagenta', marginRight: 10,}}/>
              <Typography  style={{ color:'#50b5ff',
                  }}> Photo/Vidéo</Typography>
        </IconButton>

        
        <IconButton aria-label="" style={{ backgroundColor: '#f5fbff', marginRight: 10,
              borderRadius:5,
                        }}
              >
                    <EmojiEmotionsIcon  style={{ color: '#ffc700', marginRight: 10,}}/>
                    <Typography  style={{ color:'#50b5ff',
                        }}> Réaction</Typography>
        </IconButton>

        <IconButton aria-label="" style={{ backgroundColor: '#f5fbff', marginRight: 10,
                borderRadius:5,
                          }}
                >
                      <AttachFileIcon  style={{ color: 'blue', marginRight: 10,}}/>
                      <Typography  style={{ color:'#50b5ff',
                          }}> Fichier</Typography>
        </IconButton>
<IconButton style={{ color: 'crimson', marginLeft: 65,}}> <SendIcon/></IconButton>
      
        </Box>
      </CardActions>
    </Card>
    )
}
