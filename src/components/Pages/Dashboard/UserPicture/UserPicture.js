import React from "react"
import "./UserPicture.css"
import BConvert from "../../../../utils/BinaryConverter"

const UserPicture = ({user}) => {

    /** Image arrives as a binary array and need to be converted to string for
     display the image. However the binary includes metadatas like file name, size etc.
     In order to make compatible as image, need to convert to an object and take only
     the necessary data buffer which will be compatible format as image source.
     **/

    // Raw binary array converted into an object
    //let imgObject = BConvert.uintToString(user[0].image.data)
    let imgObject = BConvert.uintToString(user.image.data)

    // Converting the image buffer data into a binary string
    let bin = BConvert.arrayBufferBase64(imgObject.buffer.data)

    // In order to display as an image need the data:image prefix
    // The image is ready to use as a correct image source
    const imgSrc = `data:image/jpeg;base64,${bin}`

    return(
        <div className="img-container" >
            <img className="image" src={imgSrc} width="300" height="300"/>
        </div>
    )
}

export default UserPicture