import { Menu, User, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo2.png';
import { useAuth } from '../Context/AuthProvider';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { user } = useAuth();
   


   // Log the authentication status
   

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 10) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    const navItems = [
         "Dashboard",
         'Online services', 
        'Demo sites', 
        'About', 
        'Contact Us', 
        'Website Pricing',
       
    ];

    const isActive = (path) => {
        if (path === "Home") {
            return location.pathname === '/';
        }
        return location.pathname === '/' + path.toLowerCase().replace(' ', '-');
    };

    return (
        <header
      className={(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80  backdrop-blur-lg shadow-sm py-3"
          : "bg-white "
      )}
    >
            <nav className="max-w-7xl mx-auto" role="navigation" aria-label="Main navigation">
                <div className=" flex  items-center justify-between p-4">
                    {/* Logo Section */}
                    <Link to="/" className=" px-2 flex items-center " aria-label="Spark Tech Home">
                        <div className="flex items-center " aria-hidden="true">
                        <img src={logo}
                        alt="ST" 
                        className='h-12 w-12'
                        />
                        </div>
                        <span>
                            <div className="text-xl font-bold text-secondary">
                            SPARK<span className='text-primary'>TECH</span>
                            </div>
                            <div className="text-xl text-primary">Solutions</div>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            to="/"
                            className={`relative px-4 py-2 text-gray-600 transition-colors duration-300
                            hover:text-blue-500 group ${isActive('')? 'text-blue-500' : ''}`}
                            aria-current={isActive('')? 'page' : undefined}
                        >
                            Home
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left 
                                transition-transform duration-300 ease-out
                                ${isActive('')? 'scale-x-100' : 'scale-x-0'} 
                                group-hover:scale-x-100`}>
                            </span>
                        </Link>
                        {navItems.map(item => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(' ', '-')}`}
                                className={`relative px-4 py-2 text-gray-600 transition-colors duration-300
                                    hover:text-blue-500 group ${isActive(item) ? 'text-blue-500' : ''}`}
                                aria-current={isActive(item) ? 'page' : undefined}
                            >
                                {item}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left 
                                    transition-transform duration-300 ease-out
                                    ${isActive(item) ? 'scale-x-100' : 'scale-x-0'} 
                                    group-hover:scale-x-100`}>
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}

                    <div className="flex items-center gap-4">
          <button className="mr-4 flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors dark:bg-slate-800 dark:hover:bg-slate-700">
           <Link to="/dashboard" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors dark:bg-slate-800 dark:hover:bg-slate-700">
           {user ? (
        <span className="text-white font-semibold text-sm">
          {user.displayName?.slice(0, 2).toUpperCase() || 'U'}
        </span>
      ) : (
        <User size={18} className="text-white" />
      )}
          </Link>
          </button>
                    <button 
                        className="md:hidden flex items-center justify-center"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-gray-600" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-600" aria-hidden="true" />
                        )}
                    </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="bg-gray-50 p-4">
                    <Link 
            to="/"
            className={`block py-2 px-4 rounded-lg transition-all duration-300
                ${location.pathname === '/'
                    ? 'text-blue-500 bg-blue-50 transform translate-x-2' 
                    : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'}`}
            onClick={() => setIsOpen(false)}
            aria-current={location.pathname === '/' ? 'page' : undefined}
        >
            Home
        </Link>
                        {navItems.map(item => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(' ', '-')}`}
                                className={`block py-2 px-4 rounded-lg transition-all duration-300
                                    ${isActive(item) 
                                        ? 'text-blue-500 bg-blue-50 transform translate-x-2' 
                                        : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'}`}
                                onClick={() => setIsOpen(false)}
                                aria-current={isActive(item) ? 'page' : undefined}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;