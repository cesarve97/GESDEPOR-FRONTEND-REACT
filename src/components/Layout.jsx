import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="site-container">
            <Navbar />
            <main className="site-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;