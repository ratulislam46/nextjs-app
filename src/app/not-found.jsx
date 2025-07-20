import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div className=''>
            <h1>404  NOT FOUND</h1>
            <Link href='/'>Go Back TO Home</Link>
        </div>
    );
};

export default Notfound;