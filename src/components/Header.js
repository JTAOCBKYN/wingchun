'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  var mobileMenuClass = '';
  

  if(isMenuOpen){
    mobileMenuClass = 'block h-screen pt-[80px]'
  } else {
    mobileMenuClass = 'hidden'
  }
  
  return (
    <header className={`${isMenuOpen ? 'h-screen' : ''} fixed w-full z-50 bg-red/90 backdrop-blur-md border-b border-white/10 py-5 px-5 lg:px-0`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="logo flex flex-row gap-x-[20px] items-center w-[40%] xl:max-w-[27%]">
            <Link href="/" >
              <Image 
                src="/images/logo.png"
                width="113"
                height="136"
                alt="Smart Wing Chun Logo"
                className="max-w-full w-[50px] lg:w-[60px]"
              />
            </Link>
            <div className="font-heading text-white text-[26px] font-bold hidden lg:block">Smart Wing Chun</div>
          </div>
          <div className="navigation max-w-[73%]">
            <nav className="hidden lg:flex items-center gap-10">
              <a className="text-[16px] text-white/80 font-medium hover:text-primary hover:underline" href="/classes">Classes</a>
              <a className="text-[16px] text-white/80 font-medium hover:text-primary hover:underline" href="/history">History</a>
              <a className="text-[16px] text-white/80 font-medium hover:text-primary hover:underline" href="/syllabus">Syllabus</a>
              <a className="text-[16px] text-white/80 font-medium hover:text-primary hover:underline" href="/gallery">Gallery</a>
              <a className="bg-ink-black text-white px-[10px] lg:px-6 py-2.5 rounded-sm uppercase font-bold text-sm tracking-wide hover:bg-slate hover:text-ink-black hover:cursor-pointer " href="/contact">Contact</a>
            </nav>
            <div
                className="hamburger relative z-50 w-[40px] h-[32px] block lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {!isMenuOpen ? (
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.9375" x2="40" y2="0.9375" stroke="#F7ECE6" strokeWidth="1.875"/>
                <line y1="15.9375" x2="40" y2="15.9375" stroke="#F7ECE6" strokeWidth="1.875"/>
                <line y1="30.9375" x2="40" y2="30.9375" stroke="#F7ECE6" strokeWidth="1.875"/>
                </svg>
                ) : (
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.1465 3.5L20.1465 17.5L34.1465 31.5L31.5 34.1465L17.5 20.1465L3.5 34.1465L0.853516 31.5L14.8535 17.5L0.853516 3.5L3.5 0.853516L17.5 14.8535L31.5 0.853516L34.1465 3.5Z" fill="#F7ECE6" stroke="#868870" strokeWidth="1.2069"/>
                </svg>
                )}
            </div>
          </div>
        </div>
      </div>

      <div className={mobileMenuClass}>
        <nav className="flex flex-col gap-[20px]">
          <a className="text-[20px] text-white/80 font-medium hover:text-primary hover:underline" href="/classes">Classes</a>
            <a className="text-[20px] text-white/80 font-medium hover:text-primary hover:underline" href="/history">History</a>
            <a className="text-[20px] text-white/80 font-medium hover:text-primary hover:underline" href="/syllabus">Syllabus</a>
            <a className="text-[20px] text-white/80 font-medium hover:text-primary hover:underline" href="/gallery">Gallery</a>
            <a className="bg-ink-black text-center text-white px-[10px] lg:px-6 py-2.5 rounded-sm uppercase font-bold text-sm tracking-wide hover:bg-slate hover:text-ink-black hover:cursor-pointer " href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
