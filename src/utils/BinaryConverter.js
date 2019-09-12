

class BinaryConverter {

    /** Converts binary array into base64 string **/
    arrayBufferBase64(buffer) {
        let binary = ''
        let bytes = [].slice.call(new Uint8Array(buffer))

        bytes.forEach( b => binary += String.fromCharCode(b))

        return btoa(binary)
    }

    /** Converts the binary data into an object **/
    uintToString(uintArray) {
        let encodedString = String.fromCharCode.apply(null, uintArray),
            decodedString = decodeURIComponent(escape(encodedString));
        return JSON.parse(decodedString)
    }

}

export default new BinaryConverter()