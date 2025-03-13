
import { cn } from '@/lib/utils';
import { MicroscopeIcon, MenuIcon, XIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

// Simplified navigation with just the diseases section
const navLinks = [
  { name: 'Diseases', href: '#diseases' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10',
        scrolled 
          ? 'py-4 bg-white/80 backdrop-blur-md shadow-subtle' 
          : 'py-6 bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-1/3 md:flex items-center justify-start">
          {/* Empty div for layout balance */}
        </div>

        <div className="flex items-center justify-center w-1/3">
          <a href="#home" className="flex items-center gap-2">
            <MicroscopeIcon className="h-7 w-7 text-healthcare-600" />
            <span className="text-2xl font-semibold">MedML</span>
          </a>
        </div>

        <div className="w-1/3 flex items-center justify-end">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-healthcare-600 transition-colors font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          'fixed inset-x-0 top-[72px] bg-white shadow-md md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-4 max-w-7xl mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-foreground/80 hover:text-healthcare-600 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
