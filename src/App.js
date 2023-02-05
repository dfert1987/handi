import { Routes, Route } from 'react-router-dom';
import LoginPage from './Views/LoginPage/LoginPage';
import { HomePage } from './Views/HomePage/HomePage';
import './App.css';
import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';

export default function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                }
            />
            <Route
                path='/login'
                element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                }
            />
        </Routes>
    );
}
