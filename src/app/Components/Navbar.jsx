"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathname = usePathname();
    console.log(pathname, pathname.includes("dashboard"));


    if (!pathname.includes("dashboard")) {
        return (
            <nav className='flex justify-center'>
                <ul className='flex justify-between w-1/2'>
                    <Link href='/'>
                        <li>Home</li>
                    </Link>
                    <Link href='/about'>
                        <li>About</li>
                    </Link>
                    <Link href='/blogs'>
                        <li>Blogs</li>
                    </Link>
                    <Link href='/services'>
                        <li>Services</li>
                    </Link>
                </ul>
            </nav>
        );
    }
    else {
        return <></>
    }

};

export default Navbar;