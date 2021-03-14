import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import  'bootstrap/dist/js/bootstrap.js'
import Landing from './landing';
import SideNavBar from './sideNavBar';
const Container = () => {
    return (

        <div class="container-fluid" id="actuContainer">
        
                <SideNavBar />
               <Landing />
           
        </div>
        
    )
}

export default Container