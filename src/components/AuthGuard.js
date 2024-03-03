import { Navigate, Outlet } from 'react-router-dom'

const AuthGuard = () => {
  const isAuthenticated = localStorage.getItem('accessToken');

  return (
        isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
    );
};

export default AuthGuard;