import React from 'react'
import Navbar from '@components/Navbar/Navbar'
//import styles from './layout.module.css'

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer className="container">This is the footer</footer>

            <style jsx>{`
                div{
                    background-color: salmon;  
                }
            `}</style>
        </div>
    )
}

export default Layout
