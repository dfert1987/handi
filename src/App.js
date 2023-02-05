import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './Views/LoginPage/LoginPage';
import HomePage from './Views/HomePage/HomePage';
import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import Loader from './Components/Loader';
import './App.css';

export default function App() {
    const { loading } = useSelector((state) => state.alert);
    return (
        <div>
            {loading && <Loader />}
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    );
}
