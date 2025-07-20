import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='mt-12 mx-4'>
            <div className='grid grid-cols-12'>

                {/* side navbar  */}
                <div className='col-span-3 border'>
                    <h1>aside</h1>
                </div>

                {/* dashboard content */}
                <div className='col-span-9 border text-center'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;