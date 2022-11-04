import React from "react";
import './Navbar.css';


const  Navbar = ({size}) =>{

    return (
        

        <nav className="navbar navbar-expand-lg py-4 navbar-light bg-light ">

            <a className="navbar-brand px-3" href="/" >SAMAT</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end"  id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto px-2">
                    <li className="nav-item">
                        
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/link">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Feedback">Feedback</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/shoes">Shoes</a>
                            <a className="dropdown-item" href="/JdShose" >Jd Shoes </a>
                            <a className="dropdown-item" href="/jeans">Jeans</a>

                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/jackets">Jackets </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    <li className="nav-login">
                        <a className="nav-link" href="/login">Login</a>
                    </li>

                    <li className ="cart nav-link" >
                        <span>
                            <a className = " fas fa-cart-plus"  href="/shoppingCart"  > </a>
                        </span>
                        <span>{size}</span>
                    </li>
                </ul>
            </div>
        </nav>
    )

    
}
export default Navbar