import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useFilePicker } from "use-file-picker";
import UserInfo from './UserInfo';
import default_pic from '../../Assets/profile-picture.png'

function ProfilePic(props) {
  const setPicture = props.setPicture;
  const [pic, setPic] = useState('')
  const image = useRef(null);
  let check = false;
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 2 },
    // minFileSize: 1,
    maxFileSize: 100, // in megabytes
  });

  useEffect(() => {
    setPic(filesContent[0]?.content)
    setPicture(filesContent[0]?.content)
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
        <img alt='update-pic' src={filesContent[0]?.content ? filesContent[0]?.content : default_pic} width="200px" id="profile_pic" />
      </div>
      <div>
        <button className='button' onClick={async () => {
          openFileSelector();
        }}>
          Update profile picture
        </button>

      </div>
    </>
  );
}

ProfilePic.propTypes = {
}

export default ProfilePic

