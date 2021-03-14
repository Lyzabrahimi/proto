import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Landing from './landing';
import Discussions from './Discussions';
import NavBar from './drawer';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  content: {
    flexGrow: 1,
    padding: theme.spacing(9), 
  },
}));

function Actualite() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
       <NavBar/>
       <main className={classes.content}>
      
       <Container maxWidth="md">
       <Landing/>
      </Container>
      
      <Discussions/>
      </main>
     
 
      </div>

    
  );
}

export default Actualite;