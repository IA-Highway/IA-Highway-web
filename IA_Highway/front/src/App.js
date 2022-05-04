import './App.css';
import React, { useState, useEffect, } from "react";
import PhotoCameraOutlinedIcon from '@mui\\icons-material\\PhotoCameraOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CropOutlinedIcon from '@mui/icons-material/CropOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ButtonCard from './components/ButtonCard.jsx'
import scroll from './components/scroll.js'
import { imageListItemBarClasses } from '@mui/material';


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
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }; 
  


  
  
  
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
   
  return (
    <div className="App">
       <nav class="navbar" id="navbarJs" style={{
          backgroundColor: navColor,
          transition: "all "
        }}>
          <div class="logo">IA-HIGHWAY</div>
          <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class="menu">
              <li>
                <a href="#">Acceuil</a></li>
              <li><a href="#fonctionnement">Fonctionnement</a></li>
              <li><a href="#conteneur">Métadonnée</a></li>
              <li><a href="#footer">Contact</a></li>
            </div>
         </ul>
        </nav>
        <div className="eclipse" id="acceuil"></div>
        <div class="conteneur">
          <div class="bienvenue">
            <h1>Bienvenue sur IA-HIGHWAY</h1>
            <div class="parag">
              Eviter les dommages
              <br/>
              Optimiser/Automatiser les maintenance des infrastructure
            </div>
          </div>
        <div className="form4">
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 1</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
        </div>
      </div>
      <div className="eclipse1"></div>
      <div id="fonctionnement">
        <h3>Pour commencer:</h3>
        <p>Préferable de suivre ces etapes afin de pouvoir assurer la fonctionnalité du traitement</p>
        <div class="contain"> 
          <div class="blur"></div>
          <ButtonCard inside={inside1} />
          <ButtonCard inside={inside2} />
          <ButtonCard inside={inside3} />
          <ButtonCard inside={inside4} />
        </div>
      </div>
      <div>
        <form className="form">
          <div className='contImage'>
          
            <div className='image'  > {selectedImage && (   <img
              src={URL.createObjectURL(selectedImage)}
              id="here"
              alt="Thumb"
            /> )}
            </div>
          </div>
          <div className='contButton'>
            <div className="form-group">
              <input type="file"  accept="image/*" onChange={imageChange} id="file" style={{ display: 'none' }} />
              <label for="file">Prendre Image</label>
              <input type="text" placeholder='Titre'/>
              <button type="submit" class="form-submit-btn">
                  Add todo
              </button>
           </div>
          </div>     
        </form>
      </div>
      <div id="conteneur">
        <span className="text"> Les Métadonnées</span>
        <div className='form3'>
            <div className="choix">
              <button className="categorie"> Catégorie</button>
              <button className="recent"> Récent</button>
              <button className="filtre"> Filtrer</button>
           </div>
          </div>     
      </div>
      <div className="form2">
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 1</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 2</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 3</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 4</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 5</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 6</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 7</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
        <div className='form-group'>
            <div className='imag'> </div>
            <p id='paragraphe'>Titre 8</p>
            <hr id='hr'/>
            <p id='paragraphe'>21/05/2021</p>
        </div>
 
      </div>  

      <footer id="footer">
      <div class="row primary">
        <div class="column about">
          <p>
          IA-Highway doit permettre à un utilisateur de sélectionner/dessiner une région/polygone entourant un objet d'intérêt, dans ce cas, des images de certaines structures de génie civil qui contiennent des dommages seront fournies
          </p>
        </div>

        <div class="column links">
          <h2>Naviguer</h2>
            <ul>
              <li>
              <a href="#">Accueil</a>
              </li>
              <li>
              <a href="#fonctionnement">Fonctionnement</a>
              </li>
              <li>
              <a href="#conteneur">Métadonnées</a>
              </li>
            </ul>
        </div>
        <div class="column subscribe">
          <h2>Contact Us</h2>
            <ul>
              <li>
              donscat24@gmail.com
              </li>
            </ul>
        </div>
      </div>
    </footer>

    </div>
  );
  
}

export default App;