import React from "react";
import './App.css';

import PhotoCameraOutlinedIcon from '@mui\\icons-material\\PhotoCameraOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ButtonCard from './components/ButtonCard.jsx'

const inside1={
  "icon": <PhotoCameraOutlinedIcon sx={{ color: "rgba(252, 221, 236, 1)" ,fontSize: 40 }}/>,
  "text":"Prendre une photo"
}
const inside2={
  "icon": <CropOutlinedIcon  sx={{ color: "rgba(252, 221, 236, 1)" ,fontSize: 40 }}/>,
  "text":"Encadrer l'infrastructure"
}
const inside3={
  "icon": <SaveOutlinedIcon  sx={{ color: "rgba(252, 221, 236, 1)" ,fontSize: 40 }}/>,
  "text":"Enregistrer en métadonnées"
}
const inside4={
  "icon": <FileUploadOutlinedIcon  sx={{ color: "rgba(252, 221, 236, 1)" ,fontSize: 40 }}/>,
  "text":"Uploader photo"
}

function App() {
  const fileInput = React.useRef();
  return (
    <div className="App">
       <h3>Pour commencer:</h3>
      <p>Préferable de suivre ces etapes afin de pouvoir assurer la fonctionnalité du traitement</p>
      <div class="contain"> 
        <div class="blur"></div>
        <ButtonCard inside={inside1} />
        <ButtonCard inside={inside2} />
        <ButtonCard inside={inside3} />
        <ButtonCard inside={inside4} />

      </div>
      <div>
        <form className="form">
          <div className='contImage'>
            <div className='image'> </div>
          </div>
          <div className='contButton'>
            <div className="form-group">
              <button 
              variant="contained" 
              color="primary" 
              onClick={()=>fileInput.current.click()}>
              Prendre une photo
              </button>
              <input ref={fileInput} type="file" style={{ display: 'none' }} />
              <input type="text" placeholder='Titre'/>
              <button type="submit" class="form-submit-btn">
                  Add todo
              </button>
           </div>
          </div>     
        </form>
      </div>  
     
    </div>
  );
}

export default App;