// Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

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
            <li className="cursor-pointer hover:cursor-pointer">
              <Image src={`/moon.png`} alt="Language Icon" width={25} height={20} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
