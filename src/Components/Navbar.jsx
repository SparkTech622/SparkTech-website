import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo2.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

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
        <header className="sticky top-0 z-50 bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto" role="navigation" aria-label="Main navigation">
                <div className="flex flex-col items-center justify-between p-4">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-2" aria-label="Spark Tech Home">
                        <div className="" aria-hidden="true">
                        <img src={logo}
                        alt="ST" 
                        className='h-10 w-10'
                        />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-secondary">
                            SPARK<span className='text-primary'>TECH</span>
                            </div>
                            <div className="text-lg text-primary">Solutions</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
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
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden absolute left-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
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