'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'; // Désactive le défilement lorsque le menu est ouvert
  }, [menuOpen]);

  return (
    <nav className={`flexBetween max-container padding-container fixed top-0 left-0 right-0 z-30 py-5 transition-all ${
      scrolled ? 'h-20 bg-opacity-25' : 'h-32'
    }`}
    style={{ backdropFilter: scrolled ? 'blur(10px) brightness(70%)' : 'none' }}
  >
      <Link href="/">
        <Image 
        src="/logo.svg" 
        alt="logo" 
        width={scrolled ? 50 : 124} 
        height={scrolled ? 50 : 124}  
        className={`transition-all ${scrolled ? 'mr-4' : ''}`} 
        style={{ flexWrap: 'nowrap', 
        overflowX: 'auto',
        marginLeft: scrolled ? '10px' : '45%',  // Ajouter 10px de marge à gauche
        marginTop: scrolled ? '20px' : '90%',   // Ajouter 10px de marge en haut }}
        marginBottom: scrolled ? '20px' : '10px',   // Ajouter 10px de marge en haut }}
  }}/>
      </Link>
      <div
        className={`hidden lg:flex overflow-hidden transition-all ${
          scrolled ? 'scale-90' : 'scale-100'
        }`}
        style={{ flexShrink: 0, maxWidth: scrolled ? '60%' : '100%' }}
      >
      <ul className="h-full flex gap-12 items-center"
          style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="text-xl text-white-20 flexCenter cursor-pointer pb-1.5 transition-all hover:text-pink-60" style={{ fontFamily: 'bello-caps, sans-serif' }}>
            {link.label}
          </Link>
        ))}
      </ul>
      </div>
      <div
        className={`lg:hidden fixed inset-0 w-full h-full ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', transition: 'opacity 0.3s ease-in-out' }}
        onClick={closeMenu}
      >
      <div className={`menu-open ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out' }}>
          <ul className="menu-links">
            {NAV_LINKS.map((link) => (
              <li key={link.key} onClick={closeMenu}>
                <Link href={link.href} className="block py-4">
                  {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute top-0 right-0 p-4 cursor-pointer" onClick={closeMenu}>
          <Image src="close.svg" alt="close" width={24} height={24} />
        </div>
      </div>
    </div>
    <Image
      src="menu.svg"
      alt="menu"
      width={32}
      height={32}
      color="white"
      className="inline-block cursor-pointer lg:hidden"
      onClick={toggleMenu}
    />
  </nav>
);
};

export default Navbar;
