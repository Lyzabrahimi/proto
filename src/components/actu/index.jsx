import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import  'bootstrap/dist/js/bootstrap.js';
import '../actu/actu.css';

import {AiOutlineBars,AiOutlineHome, AiOutlineTeam,AiFillMessage,AiOutlineBook,AiOutlineSetting,AiOutlineFileAdd} from "react-icons/ai";
import {FaRegSmileBeam,FaPhotoVideo} from "react-icons/fa";
import Ami from '../../Ami';

const Index = () => {
  return (   
   <div id="container" class="wrapper d-flex align-items-stretch">

                       {/***********left nav********/}

			<nav id="sidebar"class="p-3">
				<div class="custom-menu">
					<button type="button" id="sidebarCollapse" class="btn btn-primary">
	          <a id="sidebarbtn"><AiOutlineBars/></a>
	          <span class="sr-only">Toggle Menu</span>
	        </button>
          
        </div>
				<div class="p-4">
          <h1><a href="index.html" class="logo">UniSwap</a></h1>
	       <ul class="list-unstyled components mb-2">
          <div class="groupe">
            <h6>Vos groupes</h6>
            <ul>
              <li><img  src={process.env.PUBLIC_URL + '/images/logo10.jpg'} class="rounded-circle"/><a>Master 1 ISI</a></li> 
              <li><img  src={process.env.PUBLIC_URL + '/images/logo11.png'} class="rounded-circle" /><a>Master 2 ISI</a></li>
             </ul>
          </div>

          <div class="amis">
            <h6>Amis</h6>     
            <div class="listeAmis">
              <ul>
                <Ami />
              </ul>
            </div>
          </div>
	          
	       </ul>
        </div>
    	</nav>
     {/******end of left nav********/}
    

                               {/******page container********/}

        <div id="landing-container" class="container-scroller p-3 p-md-4 pt-4 col-md-10">

                               {/******horizontal menu*********/}

        <nav class="navbar navbar-expand-sm justify-content-center col-md-4" id="landingNav" >
          
                <div class="container-fluid">
                <div class="collapse navbar-collapse justify-content-center" >      
                            <ul class="navbar-nav" >
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



        

                       {/******page body********/}
 
        <div class="container-fluid page-body-wrapper">
            <div class="main-panel">
                <div class="content-wrapper">
                      <div id="content" class="p-3 p-md-4 pt-4">
                          <div class="row">

                       {/******file d'actualité********/}

                              <div class="col-md-8  grid-margin stretch-card" id="actualite"> 


                      
                  {/*******ajout pub********/}

                  <div class="col-md-8 pt-4 mt-5 " id="addpub"> 
                  <div class="d-flex pb-3" id="text">
                      <img src={process.env.PUBLIC_URL + '/images/prof1.jpg'} class="rounded-circle" alt="user"/>

                     
                      <div class="col-12 p-0 m-0">
                      <textarea class="form-control ml-3" id="exampleFormControlTextarea1"placeholder="Ajoutez un Texte" ></textarea>
                    </div>

                    </div>
                    <div class="d-flex ml-3 pt-3" id="add">
                    <a><AiOutlineFileAdd/></a><p>Fichier</p>
                    <a><FaPhotoVideo/></a><p>Pothos/vidéo</p>
                    <a><FaRegSmileBeam/></a><p>Réaction</p>
                    </div>
            </div>


                              </div>

                        {/******suggestion********/}

                              <div id="suggestion" class="col-md-3 grid-margin stretch-card"> 
                                      
							

                
                     <div class="card">
                            <div class="card-body">
                            <p class="card-title">Sponsorisé</p>

                            <div id="congratulation" class="mb-3  text-center">
								<div >
									<h5 class="mt-3 text-white mb-3 font-weight-bold">Congratulations
										Johnson
									</h5>
									
								</div>
							</div>
              <p class="card-title">Lives</p>
                    <div class="col-lg-2 mb-4 mt-4">
													<div class="position-relative">
														<img  src={process.env.PUBLIC_URL + '/images/live.png'} alt=""/>
														<div class="live-info badge badge-success">Live</div>
													</div>
												</div>
                   
                                  <p class="card-title">Suggestions</p>
                                      <ul class="icon-data-list">
                                                <li>
                                                  <div class="d-flex">
                                                    <img src={process.env.PUBLIC_URL + '/images/prof1.jpg'} alt="user"/>

                                                    <div>
                                                      <p class="text-info mb-1">Isabella Becker</p>
                                                      <div class="live-info badge badge-danger">Ajouter</div>

                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <div class="d-flex">
                                                    <img src={process.env.PUBLIC_URL + '/images/p1.jpg'} alt="user"/>
                                                    <div>
                                                      <p class="text-info mb-1">Adam Warren</p>
                                                      <div class="live-info badge badge-danger">Ajouter</div>

                                                    </div>
                                                  </div>
                                                </li>
                                              
                                                
                                      </ul>

                                      
                              </div>
                     </div>
                   </div>



                                      
                              </div>

                          </div>
                       </div>
                </div>
            </div>
        </div>
    
</div>        
    )
}

      export default Index;
 