'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
            <div className="flex items-center ml-4 md:ml-16">
                <Image 
                    src="/logo.png" 
                    alt="Wheels4u Logo" 
                    width={128}    
                    height={128}   
                    className="w-auto"  
                />
            </div>

            <div className="hidden md:flex items-center space-x-12 text-gray-700 font-medium text-[16px] mr-16">
                <Link href="/" className="hover:text-teal-600 font-bold">Home</Link>
                <Link href="#About" className="hover:text-teal-600 font-bold">About</Link>
                <Link href="#Contact" className="hover:text-teal-600 font-bold">Contact Us</Link>
                <Link href="/Profil" className="hover:text-teal-600 font-bold">Profil</Link>
                <Link href="/login" className="bg-black text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-800">
                    Login
                </Link>
            </div>

            <button 
                className="md:hidden flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            
            <div 
                className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 space-y-4`}
            >
                <Link href="/" className="block text-gray-700 font-medium hover:text-teal-600">Home</Link>
                <Link href="#About" className="block text-gray-700 font-medium hover:text-teal-600">About</Link>
                <Link href="#Contact" className="block text-gray-700 font-medium hover:text-teal-600">Contact Us</Link>
                <Link href="/Profil" className="block text-gray-700 font-medium hover:text-teal-600">Contact Us</Link>
                <Link href="/login" className="w-full bg-black text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-800">
                    Login
                </Link>
            </div>
        </nav>
    );
};
