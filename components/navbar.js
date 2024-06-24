// Navbar.js
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Navbar = () => {


  const [theme, setTheme] = useState('light');
  const [imageSrc, setImageSrc] = useState('/moon.png');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Update imageSrc based on the theme
    setImageSrc(newTheme === 'light' ? '/moon.png' : '/light.png');

    // Additional theme-specific changes if needed
    document.body.classList.toggle('clicked', newTheme === 'dark');
  };


  return (
    <header className={`Flex`}>
      <nav className="flex justify-around items-center font-serif font-bold">
        <div>
          <Image src="/Sahil.png" alt="Sahil Logo" width={243} height={150} />
        </div>
        <div className="right">
          <ul className="flex">
            <li className="cursor-pointer hover:cursor-pointer">
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li className="cursor-pointer hover:cursor-pointer">
              <Link href="/Photos" legacyBehavior>
                <a>Photos</a>
              </Link>
            </li>
            <li className="cursor-pointer hover:cursor-pointer">
              <Link href="/Resume" legacyBehavior>
                <a>Resume</a>
              </Link>
            </li>
            <li className="cursor-pointer hover:cursor-pointer">
              <Link href="/AboutMe" legacyBehavior>
                <a>About Me</a>
              </Link>
            </li>
            <li className="cursor-pointer hover:cursor-pointer" onClick={toggleTheme}>
              <Image src={imageSrc} alt="Language Icon" width={25} height={20} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
