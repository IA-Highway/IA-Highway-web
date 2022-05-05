import React, { useState,useEffect } from "react";
import { render } from "react-dom";
import { storage } from "./firebase";
import firebase from "firebase";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



function ImageUpload(){

    const useGeoLocationX = () => {
        const [locationX, setLocationX] = useState({
            loaded: false,
            lat: "",
        });
    
        const onSuccessX = (locationX) => {
            setLocationX({
                latitude: locationX.coords.latitude,
            });
        };
    
        
        const onErrorX = (error) => {
            setLocationX({
                loaded: true,
                error: {
                    code: error.code,
                    message: error.message,
                },
            });
        };
    
        useEffect(() => {
            if (!("geolocation" in navigator)) {
                onErrorX({
                    code: 0,
                    message: "Geolocation not supported",
                });
            }
    
            navigator.geolocation.getCurrentPosition(onSuccessX, onErrorX);
        }, []);
    
        return locationX;
    };
    const useGeoLocationY = () => {
        const [locationY, setLocationY] = useState({
            loaded: false,
            lng: "",
        });
        const onSuccessY = (locationY) => {
            setLocationY({
                longitude: locationY.coords.latitude,
            });
        };
        
    
        const onErrorY = (error) => {
            setLocationY({
                loaded: true,
                error: {
                    code: error.code,
                    message: error.message,
                },
            });
        };
    
        useEffect(() => {
            if (!("geolocation" in navigator)) {
                onErrorY({
                    code: 0,
                    message: "Geolocation not supported",
                });
            }
            navigator.geolocation.getCurrentPosition(onSuccessY, onErrorY);
        }, []);
    
        return locationY;
    };
    
    const locationX = useGeoLocationX();
    const locationY = useGeoLocationY();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const db = firebase.firestore();
    
    const [selectedImage, setSelectedImage] = useState();
    const handleChange = e => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
    if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
    }
    };

    const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
        "state_changed",
        snapshot => {
        const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
        },
        error => {
        console.log(error);
        },
        () => {
        storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url)=>{
                db.collection("Db")
                .add({
                    file_url:url,
                    date_captured:Date(),
                    width:0,
                    height:0,
                });
                db.collection("gps_location")
                .add({
                    longitude: locationY,
                    latitude: locationX,
                });
                db.collection("objects")
                .add({
                    description:"hh",
                    xmax:0,
                    xmin:0,
                    ymax:0,
                    ymin:0,
                });
            });
        }
    );
    };

    console.log("image: ", image);

    return ( 
    <div>
         <form className="form">
            <div className='contImage'>

            <div className='image'> {selectedImage && ( <img src={URL.createObjectURL(selectedImage)}id="here" name="image" alt="Thumb" /> )}
            </div>
            </div>
            <div className='contButton'>
            <div className="form-group">   
                <progress value={progress} max="100" />             

                <BrowserView>
                <input type="file" onChange={handleChange}  accept="image/*" id="file" style={{ display: 'none' }}/>
                <label for="file">Selectionner Image</label>
</BrowserView>
<MobileView>
<input type="file" onChange={handleChange}  accept="image/*" id="file" style={{ display: 'none' }}/>
                <label for="file">Selectionner Image</label>
                <input type="file" onChange={handleChange}  accept="image/*" id="camera" style={{ display: 'none' }} capture/>
                <label for="camera">Prendre Image</label>
</MobileView>
                <input type="text" placeholder='Titre' onClick={handleChange} name="title"/>
                <label onClick={handleUpload}>Upload</label>
            </div>
            </div>  
        </form>
    </div>
    );
};

export default ImageUpload