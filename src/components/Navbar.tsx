
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <nav className="bg-primary dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d78baa13-c958-4a90-afb0-e30e3888179a.png" 
                alt="Atlas Global Logistics Inc Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-white font-bold text-xl hidden sm:block">Atlas Global Logistics Inc</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Toggle onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="ml-2 bg-transparent border-0">
              {theme === 'dark' ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-white" />}
            </Toggle>
          </div>
          
          <div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">CONTACT US</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
