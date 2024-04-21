
'use client';
import React, { useRef } from 'react'
 import classes from "./image-picker.module.css"
export default function ImagePicker({label,name}) {
    const imageInput= useRef();
    function handlePicker(){
        imageInput.current.click();
    }
  return (
    <div className={classes.picker}>
   <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
         <input className={classes.input} type="file" 
          id={name}
           accept="image/png, image/jpeg"
           name={name}
           ref={imageInput}
           />
           <button className={classes.button} type="button" onClick={handlePicker}>
            Pick an Image
           </button>
    </div>

    </div>
  )
}
