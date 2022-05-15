import React, { useState, useEffect, useRef } from "react";
import { storage } from "./firebase";
import firebase from "firebase";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

function ImageUpload() {
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
    
    const locationX = useGeoLocationX().latitude;
    const locationY = useGeoLocationY().longitude;
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    
    const handleTodoChange = (e) => {
        setTitle(e.target.value);
    }
    const [selectedImage, setSelectedImage] = useState();
    const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const ref = useRef(null);
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    let c = 0;

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url)=>{
                firebase.database().ref('images').push({
                    file_url:url,
                    date_captured:Date(),
                    width:ref.current.clientWidth,
                    height:ref.current.clientHeight,
                }).child("gps_location")
                .set({
                    longitude: locationY,
                    latitude: locationX,
                })
                firebase.database().ref('images').child("objects").set({
                    description:title,
                    xmax:0,
                    xmin:0,
                    ymax:0,
                    ymin:0,
                    
                });

            });
           
        }
    );
  };

  const showPolygonPage = () => {
    console.log("Abdel");
    //Display index.html polygon page
    window.location.href="cadrage_web/index.html"
  };

 

  return (
    <div>
    
      <form className="form">
        <div className="form-group">
        {/* 
          <div className="image">
            {" "}
            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                id="here"
                name="image"
                alt="Thumb"
                ref={ref}
              />
            )}
          </div>
        </div>
        <div className="contButton">
          <div className="form-group">
            <progress value={progress} max="100" />

            <BrowserView>
              <input
                type="file"
                onChange={handleChange}
                accept="image/*"
                id="file"
                style={{ display: "none" }}
              />
              <label for="file">Selectionner Image</label>
            </BrowserView>
            <MobileView>
              <input
                type="file"
                onChange={handleChange}
                accept="image/*"
                id="file"
                style={{ display: "none" }}
              />
              <label for="file">Selectionner Image</label>
              <input
                type="file"
                onChange={handleChange}
                accept="image/*"
                id="camera"
                style={{ display: "none" }}
                capture
              />
              <label for="camera">Prendre Image</label>
            </MobileView>
            <input
              type="text"
              placeholder="Titre"
              value={title}
              onChange={handleTodoChange}
              name="title"
            />
            <label onClick={handleUpload}>Charger</label>
            */}
           
        </div>
      </form>
      <input type="file" onClick={showPolygonPage}> Sélectionner Image</input>
    </div>
  );
            }


export default ImageUpload;
