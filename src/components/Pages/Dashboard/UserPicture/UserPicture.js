import React from "react"
import "./UserPicture.css"
import BConvert from "../../../../utils/BinaryConverter"

const UserPicture = ({user}) => {

    /** Image arrives as a binary array and need to be converted to string for
     display the image. However the binary includes metadatas like file name, size etc.
     In order to make compatible as image, need to convert to an object and take only
     the necessary data buffer which will be compatible format as image source.
     **/

    const binaryToJpeg = (data) => {
        const imageObject = BConvert.uintToString(data)
        const binary = BConvert.arrayBufferBase64(imageObject.buffer.data)
        return `data:image/jpeg;base64,${binary}`
    }

    const imgSrc = binaryToJpeg(user.image.data)

    return(
        <div className="img-container" >
            <img className="image" src={imgSrc} width="300" height="300"/>
        </div>
    )
}

export default UserPicture