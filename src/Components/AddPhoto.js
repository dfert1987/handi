import React from 'react';
import '../Styles/ImageModal.css';

const ImageModal = ({ user, setViewImageUpload }) => {
    return (
        <div className='img-modal-container'>
            <div className='modal-top'>
                <i
                    className='ri-close-line closeModal'
                    onClick={() => setViewImageUpload(false)}></i>
            </div>
            <div className='modal-body'></div>
        </div>
    );
};

export default ImageModal;
