import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      errors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.password) {
        errors.password = 'Password is required';
      } else {
        const passwordErrors = [];
        
        if (formData.password.length < 8) {
          passwordErrors.push('at least 8 characters');
        }
        if (!/[A-Z]/.test(formData.password)) {
          passwordErrors.push('one uppercase letter');
        }
        if (!/[a-z]/.test(formData.password)) {
          passwordErrors.push('one lowercase letter');
        }
        if (!/[0-9]/.test(formData.password)) {
          passwordErrors.push('one number');
        }
        if (!/[!@#$%^&*]/.test(formData.password)) {
          passwordErrors.push('one special character (!@#$%^&*)');
        }
    
        if (passwordErrors.length > 0) {
          errors.password = 'Password must contain: ' + passwordErrors.join(', ');
        }
      }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    setError('');

    try {
        // Create user with Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    // Update user profile with full name
    await updateProfile(userCredential.user, {
      displayName: formData.fullName
    });

    // Clear form and errors
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setFormErrors({});
       // Show success message
    setSuccess('Account created successfully! Redirecting to login...');
    
    // Redirect after a short delay
    setTimeout(() => {
      navigate('/signUp&signIn/login');
    }, 2000);
  } catch (err) {
    // Handle specific Firebase errors
    switch (err.code) {
      case 'auth/email-already-in-use':
        setError('An account with this email already exists');
        break;
      case 'auth/invalid-email':
        setError('Invalid email address');
        break;
      case 'auth/operation-not-allowed':
        setError('Email/password accounts are not enabled. Please contact support.');
        break;
      case 'auth/weak-password':
        setError('Password is too weak');
        break;
      default:
        setError('Failed to create account. Please try again.');
        console.error('Firebase error:', err);
    }
  } finally {
    setIsLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <section className="bg-primary p-8 rounded-xl shadow-lg">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-tertiary">Create Account</h1>
            <p className="text-quinary mt-2">Join our community of digital marketers</p>
          </header>

          {error && (
            <div role="alert" className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}
          {
            success && (
              <div role="alert" className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                {success}
              </div>
            )
          }

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-quaternary">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  formErrors.fullName ? 'border-red-300' : 'border-gray-300'
                } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formErrors.fullName && (
                <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-quaternary">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  formErrors.email ? 'border-red-300' : 'border-gray-300'
                } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

            <div>
  <label htmlFor="password" className="block text-sm font-medium text-quaternary">
    Password
  </label>
  <div className="relative">
    <input
      id="password"
      name="password"
      type={showPassword ? 'text' : 'password'}
      value={formData.password}
      onChange={handleChange}
      className={`mt-1 block w-full rounded-lg border ${
        formErrors.password ? 'border-red-300' : 'border-gray-300'
      } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      aria-describedby="password-requirements"
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2"
      aria-label={showPassword ? 'Hide password' : 'Show password'}
    >
      {showPassword ? (
        <EyeOff className="h-5 w-5 text-primary" aria-hidden="true" />
      ) : (
        <Eye className="h-5 w-5 text-primary" aria-hidden="true" />
      )}
    </button>
  </div>
  {formErrors.password ? (
    <p className="mt-1 text-sm text-red-600" id="password-requirements">
      {formErrors.password}
    </p>
  ) : (
    <p className="mt-1 text-sm text-quaternary" id="password-requirements">
      Password must contain at least 8 characters, one uppercase letter, 
      one lowercase letter, one number, and one special character
    </p>
  )}
</div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-quaternary">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border ${
                  formErrors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formErrors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-xl rounded-lg px-4 py-2 text-white font-bold ${
                isLoading
                  ? 'bg-primary cursor-not-allowed'
                  : 'bg-secondary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              }`}
            >
              {isLoading ? 'Creating account...' : 'Sign up'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-tertiary">
            Already have an account?{' '}
            <Link to="/signUp&signIn/login" className="font-semibold text-xl text-quinary hover:text-quaternary hover:underline">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default SignUp;