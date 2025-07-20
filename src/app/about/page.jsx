"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {

    const router = useRouter();
    const isLoggedIn = false;

    const handleNevigate = () => {
        if (isLoggedIn) {
            router.push('/about/address')
        }
        else {
            router.push('/')
        }
    }

    return (
        <div>
            <h1 className='font-bold text-3xl'>About Page</h1>

            <p><Link href='/about/address'>Address Page</Link></p>

            {/* condition route  */}
            <button type='button' onClick={handleNevigate}>
                Address Page
            </button>
        </div>
    );
};

export default About;