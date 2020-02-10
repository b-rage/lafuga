import React, { useState } from 'react';
import { firebaseApp } from '../../firebase';


const FileUpload = ({ doImageUrl, fileType, required }) => {

    const [imageUrl, setImageUrl] = useState('');

    const onUpload = e => {

        const file = e.target.files && e.target.files[0];
        if(file.name) {
            const storageRef = firebaseApp.storage().ref(`/${fileType}/${file.name}`);
            const task = storageRef.put(file);

            task.then(snapshot => {
                return snapshot.ref.getDownloadURL()
            }).then(downUrl => {
                setImageUrl(downUrl);
                doImageUrl(downUrl);
            });
        }
        

    }

    return (
        <>
            <input className="input-class" type="file" onChange={onUpload} required={required}/>
            <img className="image-class" width="60" src={imageUrl} alt='' />
        </>
    );
}

export default FileUpload;