
import React, {useState} from "react"
import axios from "axios"


const Uploader = ({user}) => {

    const [image, setImage] = useState(null)

    function imageUploader(e) {
        setImage(e.target.files[0])
    }

    function onSubmit() {

        if(image != null){

            const data = new FormData()

            data.append('file', image)
            data.append('email', user.email)

            // Sending binary and JSON data in the same time
            axios.post("/user/picture", data, {})
                .then(res => {
                console.log(res.statusText)
            })

        } else {
            console.log("No file")
        }

    }

    return(
        <div>
            Temporary image uploader:
            <input type="file" name="picture" onChange={imageUploader} />
            <button type="button" onClick={onSubmit} >Upload</button>
        </div>
    )
}

export default Uploader
