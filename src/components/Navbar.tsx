import { Link } from 'react-router-dom'
import logo from "../images/speaker.svg"

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-column">
                <Link to="/" className="main-logo">
                    <img src={logo} alt='header-icon' className="main-logo-img"/>
                </Link>
                <nav>
                    <ul>
                        <Link className="navbar-link" to="/">Home</Link>
                        <Link className="navbar-link" to ="/my-services">My Services</Link>
                        <Link className="navbar-link" to ="/about-me">About Me</Link>
                        <Link className="navbar-link" to="my-work">My Work</Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;