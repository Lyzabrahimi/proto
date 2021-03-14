import React, { useState, useEffect} from  'react'
import { projectFireStore } from '../services/firebase';
import {projectStorage,projectFirestore } from '../services/firebase';


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
     
    useEffect(() => {
        const unsub = projectFireStore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
           let documents = [];
           snap.forEach(doc => {
               documents.push({...doc.data(), id: doc.id})
           });
           setDocs(documents);
        });

        return () => unsub();

    }, [collection])

    return {docs };
}

export default useFirestore;
