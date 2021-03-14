import React from 'react'
import useFirestore from '../../hooks/useFirestore'


const ImageGrid =({setSelectedImg}) => {

  const {docs} = useFirestore('screams');
  console.log(docs);

    return(
        <div className="img-grid">
            images
            {docs && docs.map(doc => (
                <div className = "img-wrap" key={doc.id}
                onClick={() => setSelectedImg(doc.userImage)}>
                
                  <img src={doc.userImage} alt="uploaded pic"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid