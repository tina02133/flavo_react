// React router import 
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
// fontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping,faFan } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    let navigate = useNavigate();
    return (
        <header className='header'>
            <div className='menu-bar'>
                <ul className='ul-bar'>
                    <li onClick={() => {
                        navigate('/');
                    }}>Flavo<FontAwesomeIcon icon={faFan} /></li>
                    <li onClick={() => {
                        navigate('/shop');
                    }}>Shop</li>
                    <li onClick={() => {
                        navigate('/ourstory');
                    }}>Our Story</li>
                    <li onClick={() => {
                        navigate('/contactus');
                    }}>Contact Us</li>
                    <li onClick={() => {
                        navigate('/cart');
                    }}><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;