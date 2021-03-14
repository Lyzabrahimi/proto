
import firebase from './services/firebase'
import React, {useState, useEffect} from 'react'
import {   Avatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useFirestore from './hooks/useFirestore'
import {projectStorage,projectFirestore } from './services/firebase';


function Ami() { 



    const [users, setUsers]= useState([]);
    const [loading, setLoading]= useState(false);
    
    const useStyles = makeStyles({
      root: {
        backgroundColor: 'red',
        color: props => props.color,
      },
    });

    function TypographyTheme() {
      const classes = useStyles();
    
      return <div className={classes.root}>{"This div's text looks like that of a button."}</div>;
    }
   
    const ref= firebase.firestore().collection("users");

       
        function getUsers(){
          setLoading(true);
            ref.onSnapshot((querySnapshot) => {
              const items =[];
              querySnapshot.forEach((doc) => {
                items.push(doc.data());
             
              });
          setUsers(items);
          setLoading(false);       
        });
      }

        useEffect(() =>{
           getUsers();
         }, []);

    if (loading){
      return <h1>loading..... </h1>
    }   
      return(
      <div >
        <h1> Liste d'amis</h1>
     {users.map((users) => (
    <List >
        <ListItem >
        <ListItemIcon>
        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d4.jpg'}  style={{ width: 50,height: 50,
        marginRight:0}} />
        </ListItemIcon>
        <Typography style={{ fontSize: 15,}}><a>{users.lastName} {users.firstName} </a> <br/>
        </Typography>
        </ListItem>
    </List>
          )
          )
        }
                 
      </div>
      );
    }
    

    
       
export default Ami
