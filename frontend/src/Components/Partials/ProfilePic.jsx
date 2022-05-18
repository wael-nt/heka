import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useFilePicker } from "use-file-picker";
function ProfilePic(props) {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 2 },
    // minFileSize: 1,
    maxFileSize: 50 // in megabytes
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div>
        {filesContent.map((file, index) => (
          <Avatar src={file.content} size={{ xs: 40, sm: 50, md: 40, lg: 64, xl: 80, xxl: 280 }} />
        ))}
      </div>
      <div>
        <button className='button' onClick={() => openFileSelector()}>Select profile picture </button>
      </div>
    </>
  );
}

ProfilePic.propTypes = {

}

export default ProfilePic

