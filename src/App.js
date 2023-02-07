import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './Views/LoginPage/LoginPage';
import HomePage from './Views/HomePage/HomePage';
import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import Loader from './Components/Loader';
import ProfilePage from './Views/ProfilePage';
import Find from './Views/FindPage/Find';
import AddLocation from './Views/AddLocation';
import AddReview from './Views/AddReview';
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
                    <Route
                        path='/profile'
                        element={
                            <ProtectedRoute>
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/find'
                        element={
                            <ProtectedRoute>
                                <Find />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/location'
                        element={
                            <ProtectedRoute>
                                <AddLocation />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/review'
                        element={
                            <ProtectedRoute>
                                <AddReview />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
