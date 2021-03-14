import React from 'react'
import { AiOutlineSetting,AiFillMessage,AiOutlineBook,AiOutlineHome,AiOutlineTeam } from "react-icons/ai";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddPub from './addPub'
import Suggestions from './suggestions'
import Publication from './publication'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:20,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Landing = () => {

    const classes = useStyles();


    return (
        <div className={classes.root}>

<Grid item xs={12}>
     

        <Grid item xs={8}>
             <AddPub/>
             <Publication/>
      </Grid> 

      <Grid item xs={4}>
        <Suggestions/>
      </Grid>

</Grid> 
      </div>
    )
}

export default Landing
