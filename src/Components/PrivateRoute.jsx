import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!user && !isAuthenticated) {
    return <Navigate to="/signUp&signIn/login" replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRoute;