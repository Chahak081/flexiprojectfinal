import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const AppLayout = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.className = theme; // Add the theme class to the html element
        localStorage.setItem('theme', theme); // Store theme in local storage
    }, [isDarkMode]);

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* Navbar */}
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        
            {/* Main Content */}
            <div className='flex-grow flex container mx-auto w-screen' style={{ height: 'calc(100vh - 56px)' }}>
                <div className="w-[220px]">
                    <Sidebar isDarkMode={isDarkMode} />
                </div>
                <div className="flex-1 flex">
                    {children}
                </div>
            </div>

            {/* Footer */}
            <footer className={`w-full py-4 text-center mt-auto ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                <p>
                    Developed with ❤️ by Sumedh, Chahak, and Yaju
                </p>
            </footer>
        </div>
    );
};

export default AppLayout;
