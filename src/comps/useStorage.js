import { useState,useEffect } from "react";
import { storage, db} from '../firebase';
import firebase from 'firebase';


function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // refernces
        const storageRef = storage.ref(file.name);
        const collectionRef = db.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage =(snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },(err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            collectionRef.add({ url, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
            setUrl(url);
        })

    },[file])

    return { progress, url, error }
}

export default useStorage;
