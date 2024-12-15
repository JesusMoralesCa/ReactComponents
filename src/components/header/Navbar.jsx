import React, { useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MenuData } from './MenuData'

const Navbar = () => {
    // Usamos useState para manejar el estado 'clicked'
    const [clicked, setClicked] = useState(false);

    // Función para alternar el estado 'clicked'
    const handleClick = () => {
        setClicked(!clicked);
    };

  return (
    <nav className='NavbarItems'>
        <h1 className='logo'>React <i className="fab fa-react" /></h1>
        <div className='menu-icons' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"} onClick={handleClick}>
            {MenuData.map((item, index) => {
                return (
                    <li key={index}>
                        <Link to={item.url} className={item.className}>
                        <i className={item.icon}></i>
                        {item.title}</Link>
                    </li>
                )
            } )}
        </ul>
    </nav>
  )
}

export default Navbar