import React, { useState } from 'react';
import '../App.css';
import firebase from "firebase";

const   LastAdded = () => {
  
    let item =[];
   
    const ref = firebase.database().ref('images/');

    ref.on('value', (snapshot) => {
      const data = snapshot.val();
      const j = Object.values(data);
      const v = Object.values(j);
      

    const num = v[0].hotspots.length;
    const img = v[0].file_url;
    let date = v[0].date_captured;
    date = new Date(date).toISOString().split('T')[0];
    const host =  v[0].hotspots;
    
      item.push( <><img className='imag' src={img}/> 
      <p id='paragraphe'>{host[0].name}</p>
      <hr id='hr'/>
      <p id='paragraphe'>{date}</p></>)
      
    
  });
 
    return (
        <>
{item}
        </>
       
    );
}
export default LastAdded;