


          /// code App pour notre projet UNISWAP actualite 

          import React , {useState}  from 'react';
          import Actualite from './components/actualite/actualite'
          import { BrowserRouter, Switch, Route} from 'react-router-dom'
          import Ami from './Ami';
          
          
          function App() {
          
          
            return (
              <div className="App">
          {/*
           <BrowserRouter> 
           <Switch>
            <Route path='/' component={Actualite}/>
             <App />
           </Switch>
           </BrowserRouter>
            */}
            <Ami/>

              </div> 
          
           
          );
          }
          
          
          
          export default App;
          
       


{/*
  
// code App pour recuperer les photos imageurl

  import React , {useState}  from 'react';
  import Actualite from './components/actualite/actualite';
  import { BrowserRouter, Switch, Route} from 'react-router-dom';
  import UploadForm from './components/actualite/UploadForm';
  import ImageGrid from './components/actualite/imageGrid';
  import Modal from './components/actualite/Modal';
  
  
  function App() {
    const [selectedImg, setSelectedImg] = useState(null);
  
    
    return (
      <div className="App">
  
          <UploadForm/>
          <ImageGrid  setSelectedImg={setSelectedImg}/>
          {selectedImg && <Modal  selectedImg  =  {selectedImg }  setSelectedImg  = {setSelectedImg} />}
  
     </div>  
    );
  }
  
  export default App;
        */}

