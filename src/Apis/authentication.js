import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { fireDB } from '../firebaseConfig';
import CryptoJS from 'crypto-js';

export const LoginUser = (payload) => {};

export const RegisterUser = async (payload) => {
    try {
        const qry = query(
            collection(fireDB, 'users'),
            where('email', '==', payload.email)
        );
        const qry2 = query(
            collection(fireDB, 'users'),
            where('username', '==', payload.username)
        );
        
        const querySnapshot = await getDocs(qry);
        const querySnapshot2 = await getDocs(qry2);

        if (querySnapshot.size > 0) {
            return {
                success: false,
                message:
                    "There's already an account registered with this email.",
            };
        }

        if (querySnapshot2.size > 0) {
            return {
                success: false,
                message: 'That username is already taken.',
            };
        }

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
