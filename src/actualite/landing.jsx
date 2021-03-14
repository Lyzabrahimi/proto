import React from 'react'
import { AiOutlineSetting,AiFillMessage,AiOutlineBook,AiOutlineHome,AiOutlineTeam } from "react-icons/ai";

const Landing = () => {
    return (
        <div class="container" id="landing">
                    <nav class="navbar navbar-expand-sm navbar-light bg-light" id="landingNav">
                    <div class="container-fluid" id="topnav">
                                        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
                                <li class="nav-item" >
                                <a class="nav-link active" aria-current="page" href="#"><AiOutlineHome/></a>
                                </li>
                                <li class="nav-item" >
                                <a class="nav-link" href="#"><AiOutlineTeam/></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><AiFillMessage/></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><AiOutlineBook /></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><AiOutlineSetting/></a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
    


                <nav class="navbar navbar-expand-sm " id="story">
                    <div class="container-fluid" id="story-container">
                                        
                        <div class="collapse navbar-collapse" id="story-content">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
                            <li class="nav-item">
                                <a class="nav-link" href="#"><img src={process.env.PUBLIC_URL + '/images/img.jpg'} alt="" class="rounded-circle  " id="p1"/></a>
                                </li>
                                
                                <li class="nav-item">
                                <a class="nav-link" href="#"><img src={process.env.PUBLIC_URL + '/images/p1.jpg'} alt="" class="rounded-circle"id="p2"/></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><img src={process.env.PUBLIC_URL + '/images/p2.jpg'} alt="" class="rounded-circle"/></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><img src={process.env.PUBLIC_URL + '/images/imgg.jpg'} alt="" class="rounded-circle"/></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><img src={process.env.PUBLIC_URL + '/images/prof2.png'} alt="" class="rounded-circle"/></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><img src={process.env.PUBLIC_URL + '/images/p5.jpg'} alt="" class="rounded-circle" id="p3"/></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><img src={process.env.PUBLIC_URL + '/images/p6.jpg'} alt="" class="rounded-circle"/></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#"><img src={process.env.PUBLIC_URL + '/images/prof1.jpg'} alt="" class="rounded-circle"/></a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Landing
