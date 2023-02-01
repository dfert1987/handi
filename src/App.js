import { Routes, Route } from 'react-router-dom';
import LoginPage from './Views/LoginPage/LoginPage';
import { HomePage } from './Views/HomePage/HomePage';
import './App.css';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    );
}
