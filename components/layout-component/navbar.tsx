"use client"; // 👈 ADD THIS as the very first line

// Importing the dynamic function from Next.js
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Logo from './nav-components/logo';
import NavLinks from './nav-components/navLinks';
import MobileMenu from './nav-components/mobileMenu';

// Dynamically import MobileMenuButton and disable SSR
const MobileMenuButton = dynamic(() => import('./nav-components/mobileMenuButton'), {
  ssr: false,
});

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-primary text-secondary font-roboto w-[90vw] h-auto mx-auto p-4 flex justify-between items-center">
      <Logo />
      <NavLinks />
      <MobileMenuButton isMobileMenuOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
      <button className="hidden md:block bg-primary hover:bg-secondary text-secondary hover:text-primary font-semibold border-1 border-secondary rounded-md px-4 py-2 text-center">
        Get started
      </button>
    </header>
  );
};

export default Navbar;

