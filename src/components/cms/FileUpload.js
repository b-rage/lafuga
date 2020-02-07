import React, { useState } from 'react';
import { firebaseApp } from '../../firebase';


const FileUpload = ({doImageUrl}) => {

    const [imageUrl, setImageUrl] = useState('');

    const onUpload = e => {

        const file = e.target.files[0];
        const storageRef = firebaseApp.storage().ref(`/books/${file.name}`);
        const task = storageRef.put(file);

        task.then(snapshot => {
            return snapshot.ref.getDownloadURL()
        }).then(downUrl => {
            setImageUrl(downUrl)
            console.log('downUrl', downUrl)
            doImageUrl(downUrl);
        });

        
    }

    return (
        <>
            <p>Fileupload</p>
            <input type="file" onChange={onUpload} />
            <img width="520" src={imageUrl} alt='' />
        </>
    );
}

export default FileUpload;