import React, {useRef} from 'react'
import {Camera} from 'react-cam'

// code borrowed from react-cam documentation https://github.com/ccwukong/react-cam#readme
const Identify = ()=>{

    const capture = (imgSrc)=>{console.log(imgSrc)}

    const cam = useRef(null)
    return(
        <>
            <Camera
                showFocus={true}
                front={false}
                capture = {capture}
                ref={cam}
                width="80%"
                height = "auto"
                focusWidth="80%"
                focusHeight="60%"
                btnColor="white"
            />
            <button onClick={img=>cam.current.capture(img)}>Take Photo</button>
        </>
    )
}
export default Identify