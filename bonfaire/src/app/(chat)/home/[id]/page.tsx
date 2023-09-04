"use client";

import React, { useEffect, useState } from 'react';

const HomeID: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Check screen width when the component mounts
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold as needed
        };

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Clean up event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
        {isSmallScreen ? (
            // Render content for small screens
            <div className='h-screen bg-red-50'>
                <div className="flex w-full h-full">
                    <div className="w-full m-3 bg-red-400 rounded">
                        <div className='w-full h-10 bg-red-500 rounded flex items-center justify-center'>
                            <span className=''>Your Chat with XXX:</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            // Render content for larger screens
            <div className='h-screen bg-red-50'>
                <div className="flex w-full h-full">
                    <div className="w-2/6 m-3 bg-red-300 flex flex-col rounded">
                        <div className="h-1/6 bg-red-600 mb-2 rounded flex items-center justify-center">
                            <div className='absolute top-6 left-6 w-16 h-16 overflow-hidden'>
                                <img src="/kiana.png" className="rounded-full w-full h-full object-cover object-center" alt="..." />
                            </div>
                            <div className='border top-8 left-26 rounded bg-stone-400/75'>
                                <span className='text-black text-2xl'>Username</span>
                            </div>
                        </div>
                        <div className="h-5/6 flex">
                            <div className="w-1/2 mr-1 bg-red-800 overflow-y-auto rounded">
                                
                            </div>
                            <div className="w-1/2 ml-1 bg-red-900 overflow-y-auto rounded">
                                {/* Bottom Left Right (50%) */}
                            </div>
                        </div>
                    </div>
                    <div className="w-4/6 m-3 ml-1 bg-red-400 rounded">
                        <div className='w-full h-10 bg-red-500 rounded flex items-center justify-center'>
                            <span className=''>Your Chat with XXX:</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};



export default HomeID;