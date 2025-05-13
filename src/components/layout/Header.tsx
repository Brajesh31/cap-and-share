import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, PlusCircle, Home, Coffee } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Coffee className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold text-green-600">Cap'nShare</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-green-500 transition">
                Dashboard
              </Link>
              <Link to="/food" className="text-gray-600 hover:text-green-500 transition">
                Find Food
              </Link>
              <Link 
                to="/post-food" 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium flex items-center transition">
                <PlusCircle className="h-4 w-4 mr-1" />
                Share Food
              </Link>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition">
                  <User className="h-5 w-5" />
                  <span>{user?.name?.split(' ')[0] || 'Account'}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                  <button 
                    onClick={handleLogout} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Sign out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/food" className="text-gray-600 hover:text-green-500 transition">
                Browse Food
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-green-500 transition">
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition">
                Sign up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-green-500 transition"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" /> 
              <span>Home</span>
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Dashboard</span>
                </Link>
                <Link 
                  to="/food" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Find Food</span>
                </Link>
                <Link 
                  to="/post-food" 
                  className="flex items-center space-x-2 text-green-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PlusCircle className="h-5 w-5" />
                  <span>Share Food</span>
                </Link>
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition py-2"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign out</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/food" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Browse Food</span>
                </Link>
                <Link 
                  to="/login" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Log in</span>
                </Link>
                <Link 
                  to="/signup" 
                  className="flex items-center space-x-2 text-green-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Sign up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;