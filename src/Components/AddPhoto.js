import React, { useState, useMemo } from 'react';
import { storage } from '../firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../Styles/ImageModal.css';

const ImageModal = ({ user, setViewImageUpload }) => {
    const [avatar, setAvatar] = useState();
    const [noButton, setNoButton] = useState(true);

    const validateFileType = ({ type, name }, allowedTypes) => {
        if (!allowedTypes) {
            return true;
        }
        if (type) {
            return allowedTypes.includes(type);
        }
    };

    const uploadImage = () => {
        if (!avatar) {
            return null;
        } else {
            const imageRef = ref(storage, `avatars/${avatar.name + v4()}`);
            uploadBytes(imageRef, avatar).then(() => {
                console.log(avatar);
                alert('Image Uploaded');
            });
        }
    };

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
                    setNoButton(false);
                    return false;
                }
            },
            onRemove: () => {
                setAvatar();
                setNoButton(true);
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
                </Upload>
                <Button disabled={noButton} onClick={uploadImage}>
                    Add Image
                </Button>
            </div>
        </div>
    );
};

export default ImageModal;
