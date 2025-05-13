import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6" />
              <span className="text-xl font-bold">Cap'nShare</span>
            </div>
            <p className="text-green-100">
              Reducing food waste on campus, one meal at a time.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-yellow-300 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/brajesh-kumar-9b58651a8/" className="text-white hover:text-yellow-300 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:bk117134@gmail.com" className="text-white hover:text-yellow-300 transition">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+917452971645" className="text-white hover:text-yellow-300 transition">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/food" className="text-green-100 hover:text-white transition">Browse Food</Link>
              </li>
              <li>
                <Link to="/post-food" className="text-green-100 hover:text-white transition">Share Food</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-green-100 hover:text-white transition">Dashboard</Link>
              </li>
              <li>
                <Link to="/feedback" className="text-green-100 hover:text-white transition">Feedback</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-green-100 hover:text-white transition">FAQ</Link>
              </li>
              <li>
                <Link to="/terms" className="text-green-100 hover:text-white transition">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-green-100 hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white transition">Contact Us</Link>
              </li>
              <li>
                <a 
                  href="/menu.pdf" 
                  download 
                  className="text-green-100 hover:text-white transition"
                >
                  Download Menu
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>bk117134@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+91 7452971645</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-600 mt-8 pt-6 text-center text-green-100">
          <p>© {new Date().getFullYear()} Cap'nShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;