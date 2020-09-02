import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'

 


export default function NasaPhoto() {
  

  const apiKey = process.env.REACT_APP_NASA_KEY;
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch( 
        // `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
               
       `https://api.nasa.gov/planetary/apod?api_key=ubSCXJxjbfE09258JhPKN7gCLejksuSpAvc8uI7I` 
       );

  
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className={styles.nasaphoto}>
       
        {photoData.media_type === "image" ? (
          <img
            src={photoData.url}
            alt={photoData.title}
            className={styles.photo}
          />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className={styles.photo}
          />
        )}
          {/* // src={photoData.url}
          // alt={photoData.title}
          // className="photo" */}
        
      <div>
        <h1>{photoData.title}</h1>
        <p className={styles.date}>{photoData.date}</p>
        <p className={styles.explanation}>{photoData.explanation}</p>
      </div>
    </div>


        

  );
}







