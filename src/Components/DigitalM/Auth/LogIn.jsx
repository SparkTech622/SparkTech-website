import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const LogIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const SESSION_DURATION = 1 * 60 * 60 * 1000; // 1 hours in milliseconds
const SESSION_KEY = 'userSession';

  // Check if user is already logged in and has a valid sessionconst useSessionManagement = () => {
    useEffect(() => {
      // Check for existing session on mount
      const checkExistingSession = () => {
        const sessionData = sessionStorage.getItem(SESSION_KEY);
        if (sessionData) {
          const { timestamp } = JSON.parse(sessionData);
          const now = new Date().getTime();
          
          if (now - timestamp <= SESSION_DURATION) {
            // Valid session exists, stay logged in
            auth.onAuthStateChanged((user) => {
              if (user) {
                navigate('/dashboard');
              }
            });
          } else {
            // Session expired, clear it
            handleLogout();
          }
        }
      };
    
      checkExistingSession();
    }, [navigate]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous errors
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // If successful, redirect to dashboard
      if (userCredential.user) {
        // Save session data with more user details
        const sessionData = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          timestamp: new Date().getTime(),
          expiresAt: new Date().getTime() + SESSION_DURATION
        };
        
        
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
        localStorage.setItem('isAuthenticated', 'true');
        // Show success message with timeout info
        // alert('Login successful! Your session will expire in 4 hours.');
        
        navigate('/dashboard');
      }
    } catch (err) {
      // Handle specific Firebase errors
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No account found with this email');
          break;
        case 'auth/wrong-password':
          setError('Invalid password');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/too-many-requests':
          setError('Too many failed attempts. Please try again later');
          break;
        default:
          setError('Failed to sign in. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem(SESSION_KEY);
      localStorage.removeItem('isAuthenticated');
      window.location.href = '/signUp&signIn/login';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <section className="bg-secondary p-8 rounded-xl shadow-lg">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
            <p className="text-quinary mt-2">Sign in to continue learning</p>
          </header>

          {error && (
            <div role="alert" className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-primary ">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-medium text-primary ">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 " aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5 " aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-primary hover:text-quaternary"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`relative w-full rounded-lg px-4 py-2 text-white font-medium overflow-hidden transition-all duration-300 ${
                isLoading
                  ? 'bg-tertiary cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90'
              }`}
            >
              <span className={`${isLoading ? 'invisible' : 'visible'}`}>
                Sign in
              </span>
              {isLoading && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg 
                    className="animate-spin h-5 w-5 text-primary" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </span>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-lg text-primary">
            Don&apos;t have an account?{' '}
            <Link to="/signUp&signIn" className="font-medium text-xl text-quaternary hover:text-tertiary hover:underline">
              Sign up
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default LogIn;