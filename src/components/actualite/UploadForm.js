// ce code me permet d'ajouter des photos vers ma firebase de n'importe quel emplacement dans mon ordi
// mais il n'a pas marché y a qlqchose qui manque dans mes paramétres

import React, {useState} from 'react'

const UploadForm = () =>{
    const [file, setFile]= useState(null);
    const [error, setError] = useState(null);


    const changeHandler = (e)=> {

        const types = ['image/jpg', 'image/png', 'images/jpeg'];

        let selected = e.target.files[0];

      if (selected && types.includes(selected.type)){
          setFile(selected);
          setError('');
        } else {
          setFile(null);
          setError('please select an image file (png or jpeg)');
        }
    }

    return(
        <form>
        <label>
            <input type="file" onChange= {changeHandler} />
            <span>+</span>
        </label>   
            <div className="output">
              {error && <div className="error">{error}</div>}
              {file && <div>{file.name}</div>}
              {file && <progressBar file={file} setFile= {setFile} /> }
            </div>
        </form>
    )

}
export default UploadForm;