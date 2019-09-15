import React from 'react';
import BConvert from "../../../../utils/BinaryConverter"
import './ProjectContributors.css';

const ProjectContributors = ({ contributors }) => (
  <div className="members-container">
    <h3>Members</h3>
    <div className='members'>
      {
        contributors.slice(1).map((contributor) => {
          if (contributor[0].image) {
          /** Image arrives as a binary array and need to be converted to string for
          display the image. However the binary includes metadatas like file name, size etc.
          In order to make compatible as image, need to convert to an object and take only
          the necessary data buffer which will be compatible format as image source.
          **/

          // Raw binary array converted into an object
          const imgObject = BConvert.uintToString(contributor[0].image.data)

          // Converting the image buffer data into a binary string
          const bin = BConvert.arrayBufferBase64(imgObject.buffer.data)

          // In order to display as an image need the data:image prefix
          // The image is ready to use as a correct image source
          const imgSrc = `data:image/jpeg;base64,${bin}`

          return (
            <div key={contributor[0].user_id} className="member-container">
              <img src={imgSrc} alt='contributor' className='member'/>
            </div>
          )}
        })
      }
    </div>
  </div>
)


export default ProjectContributors;