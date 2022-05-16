import React, { useState } from 'react';
import '../App.css';
import firebase from "firebase";

const   ListItems = () => {
  
    let item =[];
   
    const ref = firebase.database().ref('images/');

    ref.on('value', (snapshot) => {
      const data = snapshot.val();
      const j = Object.values(data);
      const v = Object.values(j);
      
      for (var i = 0; i < v.length; i++){
    const num = v[i].hotspots.length;
    const img = v[i].file_url;
    let  date = v[i].date_captured;
    date = new Date(date).toISOString().split('T')[0];
    const host =  v[i].hotspots;
    
      item.push( <><div className="form-group"><img className='imag' src={img}/> 
      <p id='paragraphe'>{host[0].name}</p>
      <hr id='hr'/>
      <p id='paragraphe'>{date}</p></div></>)
      
    }
  });
  console.log(item)
    return (
        <>
{item}
        </>
       
    );
}
export default ListItems;