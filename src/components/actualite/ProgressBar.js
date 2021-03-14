import React, {useState} from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({file,setFile }) => {
    const {url, progress} = useStorage(file);
    console.log(progress, url);

useEffect(() => {
    if(url){
        setFile(null);
    }
}, [url])
     return (
         <div className = "progress-bar" style={{width:progress + '%'}}>progress</div>
     )
}

export default ProgressBar