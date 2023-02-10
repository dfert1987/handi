import React, { useState, useMemo } from 'react';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../Styles/ImageModal.css';

const ImageModal = ({ user, setViewImageUpload }) => {
    const [avatar, setAvatar] = useState();

    const validateFileType = ({ type, name }, allowedTypes) => {
        if (!allowedTypes) {
            return true;
        }
        if (type) {
            return allowedTypes.includes(type);
        }
    };

    console.log(avatar);

    const uploadProps = useMemo(
        () => ({
            beforeUpload: (file) => {
                const isAllowedType = validateFileType(
                    file,
                    'image/png',
                    'image/jpeg',
                    'image/jpg'
                );
                if (!isAllowedType) {
                    message.error(`${file.name} is not a valid file type`);
                    return false;
                }
                if (avatar) {
                    message.error(
                        'Only one image upload allowed at a time. Remove previous upload below before choosing a new image,'
                    );
                    return false;
                } else {
                    setAvatar(file);
                    return false;
                }
            },
            onRemove: () => {
                setAvatar();
                return true;
            },
        }),
        []
    );
    return (
        <div className='img-modal-container'>
            <div className='modal-top'>
                <i
                    className='ri-close-line closeModal'
                    onClick={() => setViewImageUpload(false)}></i>
            </div>
            <div className='modal-body'>
                <Upload {...uploadProps} listType='picture' maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload an Image</Button>
                </Upload>{' '}
            </div>
        </div>
    );
};

export default ImageModal;
