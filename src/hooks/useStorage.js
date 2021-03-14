import {useState, useEffect} from 'react';
import {projectStorage,projectFilestore, timestamp} from '../sevices/firebase';


const useStorage = (file) =>{
const [progress, setProgress] = useState(0);
const [error, setError] = useState(null);
const [userImage, setUserImage] = useState(null);



useEffect(() =>{
            //references
            const storageRef= projectStorage.ref(file.name);
            const collectionRef = projectFirestore.collection('images');
            
            storageRef.put(file).on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) *100;
                setProgress(percentage);

            }, (err) => {
                setError(err);
            }, async() => {
                const userImage = await storageRef.getDownloadURL();
                const createdAt = timestamp ();
                collectionRef.add({userImage,createdAt});
                setUrl(userImage);
            })
            
        }, [file]);
            
                return { progress, userImage, error}

}

   export default useStorage;   