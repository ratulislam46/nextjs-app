import Link from 'next/link';
import React from 'react';

const data = [
    {
        _id: 1,
        divition: "Barishal",
        city: "Barishal"
    },
    {
        _id: 2,
        divition: "Barishal",
        city: "Potuakhali"
    },
    {
        _id: 3,
        divition: "Dhaka",
        city: "Mirpur"
    },
    {
        _id: 4,
        divition: "Sylhet",
        city: "Hemayetpur"
    }
]

const Services = () => {
    return (
        <div>
            <p className='font-bold text-3xl'>Services page</p>

            {
                data?.map(d => {
                    return (
                        <div key={d._id}>
                            <Link href={`/services/${d._id}`}>
                                <p className='border p-2 mb-4'>{d.city}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Services;