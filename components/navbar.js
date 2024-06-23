// Navbar.js
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Navbar = () => {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Here you can apply theme-specific changes to your application
    // For simplicity, we will just change the background color of the body
    document.body.classList.toggle('clicked', newTheme === 'dark');
  };
  function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("/light.png")) {
        image.src = "/moon.png";
        console.log("Working")
    } else {
        image.src = "/light.png";
    }
}
  return (
    <header className={`Flex `}>
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
              <Image id='myImage' src='/light.png' alt="Language Icon" width={25} height={20} onClick={changeImage} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
