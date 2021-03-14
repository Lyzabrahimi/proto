import React from 'react'
import { makeStyles,Typography,Divider,Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginBottom:20,
  },
  eventCont:{
    marginBottom: 30,
  },
  
}));

export default function Suggestions() {
    const classes = useStyles();

    return (
        <div>


<div className="suggestions">
    <Card className={classes.root}>
      <CardHeader style={{paddingBottom :0 ,}}
      
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
       
        title="Suggestions"
        
      >   </CardHeader>
     <Divider/>
      <CardContent  >
          <Box style={{ marginBottom:20,  }}>
      <Button display="flex" className={classes.eventCont} style={{padding:0,  textTransform: 'lowercase', width: 255 ,marginBottom:10 }}>
        <img  src={process.env.PUBLIC_URL + '/images/s2.png'} style={{marginRight:20,borderRadius: 5,height: 50,width: 50}} />
          <Typography style={{ fontSize: 19,
              }}>Iqonic Studio 
          </Typography>

      </Button>
      <img  src={process.env.PUBLIC_URL + '/images/img8.jpg'} style={{borderRadius: 5,maxWidth: '100%',
    height: 'auto'}} />
      
    <IconButton aria-label="" style={{ marginLeft:40, marginRight: 10,
                borderRadius:5,
                          }}
                >
                      <ThumbUpAltIcon  style={{  marginRight: 10,}}/>
                      <Typography  style={{ color:'#50b5ff',
                          }}>  Aimer la Page</Typography>
        </IconButton>
      </Box>

      <Box>
      <Button display="flex" className={classes.eventCont} style={{padding:0,  textTransform: 'lowercase', width: 255 ,marginBottom:10 }}>
        <img  src={process.env.PUBLIC_URL + '/images/logo2.jpg'} style={{marginRight:20,borderRadius: 5,height: 50,width: 50}} />
          <Typography style={{ fontSize: 19,
              }}>Iqonic Studio 
          </Typography>

      </Button>
      <img  src={process.env.PUBLIC_URL + '/images/s1.jpg'} style={{borderRadius: 5,maxWidth: '100%',
    height: 'auto'}} />
    
    <IconButton aria-label="" style={{ marginLeft:40, marginRight: 10,
                borderRadius:5,
                          }}
                >
                      <ThumbUpAltIcon  style={{  marginRight: 10,}}/>
                      <Typography  style={{ color:'#50b5ff',
                          }}>  Aimer la Page</Typography>
        </IconButton>
      </Box>
     
      </CardContent>
      
      
    </Card>
    </div>



            <div className="events">
            <Card className={classes.root}>
      <CardHeader style={{paddingBottom :0 ,}}
      
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
       
        title="Evénements"
        
      >   </CardHeader>
     <Divider/>
      <CardContent >
      <Button display="flex" className={classes.eventCont} style={{  textTransform: 'lowercase', width: 255 ,
              }}>
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/e1.jpg'}  style={{ marginRight: 25,width: 55,
    height: 55,
              }} />
          <Typography style={{ fontSize: 19,
              }}>Web Workshop <br/>
          <small style={{ fontSize: 14, color:'gray'
              }}> Il y'a 1 Heur</small>
          </Typography>

      </Button>
      <Button display="flex" className={classes.eventCont} style={{  textTransform: 'lowercase',width: 255
              }}>
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/e2.jpg'}  style={{ marginRight: 25,width: 55,
    height: 55,
              }} />
          <Typography style={{ fontSize: 19,
              }}>Web Workshop <br/>
          <small style={{ fontSize: 14, color:'gray'
              }}> Il y'a 1 Heur</small>
          </Typography>

      </Button>

      </CardContent>
      
      
    </Card>
    </div>





        </div>
    )
}
