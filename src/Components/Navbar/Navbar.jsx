import { Link, NavLink } from "react-router-dom";


function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg py-4 fixed-top">
            <div className="container navbar-dark">
                <NavLink className="navbar-brand" to={'/'}>START FRAMEWORK</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link me-2" activeclassname="active" aria-current="page" to={'about'}>ABOUT</NavLink>
                        <NavLink className="nav-link me-2" to={'portfolio'}>PORTFOLIO</NavLink>
                        <NavLink className="nav-link me-2" to={'contact'}>CONTACT</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;