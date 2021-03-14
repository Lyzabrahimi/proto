import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import {AiOutlineBell } from "react-icons/ai";
const SideNavBar = () => { 
    return (

        <div>

            <div class="sidenav">
                   <img id="logo" src={process.env.PUBLIC_URL + '/images/logo3.ico'} class="rounded-circle" />
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        
          
                    <div class="groupe">
                <h6>Vos groupes</h6>
                <ul>
                   <li><img  src={process.env.PUBLIC_URL + '/images/logo10.jpg'} class="rounded-circle"/><a>Master 1 ISI</a></li> 
                    <li><img  src={process.env.PUBLIC_URL + '/images/logo11.png'} class="rounded-circle" /><a>Master 2 ISI</a></li>
                </ul>
            </div>
            <div class="amis">
                <h6>Amis</h6>
               
                < input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="amis"/>
               
                <div class="listeAmis">
                    <ul>
                       <li> <img src={process.env.PUBLIC_URL + '/images/prof1.jpg'} alt="" class="rounded-circle"/> <a>amel amel</a> </li> 
                       <li><img src={process.env.PUBLIC_URL + '/images/prof2.png'} alt="" class="rounded-circle"/><a>sonia nina</a></li>
                       <li><img src={process.env.PUBLIC_URL + '/images/prof6.png'} alt="" class="rounded-circle"/><a>sonia nina</a></li>
                       <li><img src={process.env.PUBLIC_URL + '/images/prof3.png'} alt="" class="rounded-circle"/><a>sonia nina</a></li>
                       <li><img src={process.env.PUBLIC_URL + '/images/prof4.png'} alt="" class="rounded-circle"/><a>sonia nina</a></li>

                    </ul>
                    
                </div>
            </div>
            </div>

            <div class="rightsidenav">

            <nav class="navbar navbar-expand-sm navbar-light " id="rightgNav">
                    <div class="container-fluid" >
                                        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav " id="dropdown">
                                <li class="nav-item">
                                <a id="notification" class="nav-link " aria-current="page" href="#"><AiOutlineBell /></a>
                                </li>
                                
                                <li class="nav-item dropdown" id="dropdown">
                                <img src={process.env.PUBLIC_URL + '/images/prof1.jpg'} alt="" class="rounded-circle" id="phtprofil"/>
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Adam lalana
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                            </ul>
                            
                        </div>
                    </div>
                  
                </nav>
              
            </div>
            

        </div>
    )
}

export default SideNavBar
