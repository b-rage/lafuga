import React, { useState }  from 'react';
import FileUpload from './FileUpload'


const AddBook = () => {

  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');

  const doImageUrl = (url) => {
    setImageUrl(url)
    console.log('imageUrl', url)
  }
  return (
    <>
  <p>book</p>
    <FileUpload  doImageUrl={doImageUrl}/>
    </>
  );
}

export default AddBook;