import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { useFilePicker } from "use-file-picker";

function ProfilePic({setPhoto}) {
  const [pic, setPic] = useState('')
  const [savedPic, setSavedPic] = useState('')
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 2 },
    // minFileSize: 1,
    maxFileSize: 100, // in megabytes
  });
  useEffect(() => {
    setSavedPic(document.getElementById('profile-img').src);
    console.log(savedPic);
    setPic(filesContent[0]?.content)
    setPhoto(filesContent[0]?.content)
  }, [filesContent[0]?.content]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    return <div>Error...</div>;
  }
  console.log(pic)

  return (
    <>
      <div>
        <img alt='update-pic' src={pic ? pic : savedPic} width="200px" id="profile_pic" />
      </div>
      <div>
        <button className='btn' onClick={async () => {
          openFileSelector();
        }}>
          Select profile picture
        </button>

      </div>
    </>
  );
}

ProfilePic.propTypes = {
}

export default ProfilePic

