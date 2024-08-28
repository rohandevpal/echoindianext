"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import navLinks from '@/app/constants';
import images from '@/app/images';

interface NavLink {
  label: string;
  type: 'single' | 'group';
  path?: string;
  target?: '_blank';
  children?: NavLink[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="bg-white-800 font-roboto shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <Image
            src={images.logo} // Path to your logo image
            alt="Logo"
            width={150} // Adjust width as needed
            height={40}  // Adjust height as needed
            priority={false}
            quality={5}
            className="object-contain"
          />
        </Link>
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-black" 
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row`}>
          {navLinks.map((link, index) => (
            <NavLinkItem key={index} link={link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavLinkItem: React.FC<{ link: NavLink }> = ({ link }) => {
  if (link.type === 'single') {
    return (
      <Link 
        href={link.path!} 
        className={`block px-4 py-2 text-black hover:bg-white-700 rounded ${link.target ? 'target:_blank' : ''}`}
        target={link.target}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center px-4 py-2 text-black hover:bg-white-700 rounded">
        {link.label}
        <FiChevronDown size={16} className="ml-2 text-black" />
      </button>
      <div className="absolute hidden group-hover:block bg-white cursor-pointer rounded shadow-lg">
        {link.children?.map((child, idx) => (
          <Link 
            href={child.path!} 
            key={idx} 
            className="block px-4 py-2 text-black hover:bg-white-700 cursor-pointer rounded text-left"
            target={child.target}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
