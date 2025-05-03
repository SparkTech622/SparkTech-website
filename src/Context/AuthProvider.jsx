import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const SESSION_DURATION = 4 * 60 * 60 * 1000; // 4 hours

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const sessionData = sessionStorage.getItem('userSession');
      
      if (sessionData) {
        const { timestamp } = JSON.parse(sessionData);
        const now = new Date().getTime();
        
        if (now - timestamp > SESSION_DURATION) {
          // Session expired
          sessionStorage.removeItem('userSession');
          localStorage.removeItem('isAuthenticated');
          setUser(null);
        } else {
          setUser(currentUser);
        }
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};