import { addDoc, collection } from '@firebase/firestore';
import { fireDB } from '../firebaseConfig';
import CryptoJS from 'crypto-js';

export const LoginUser = (payload) => {};

export const RegisterUser = async (payload) => {
    try {
        const encryptedPassword = CryptoJS.AES.encrypt(
            payload.password,
            'Handi-Stall'
        ).toString();
        payload.password = encryptedPassword;
        const response = await addDoc(collection(fireDB, 'users'), payload);
        return {
            success: true,
            message: 'User registered successfully!',
            data: response,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            data: null,
        };
    }
};
