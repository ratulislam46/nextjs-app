import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-center'>
            <ul className='flex justify-between w-1/2'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </nav>
    );
};

export default Navbar;