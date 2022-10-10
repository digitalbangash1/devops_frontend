import React from "react";
import './Navbar.css';
import { useSelector } from "react-redux";
import { ShoppingBasket } from "@mui/icons-material";
import {useNavigate,Link} from 'react-router-dom';


const  Navbar = () =>{
    const navigate = useNavigate();

   const navigateToCart = () => {
    navigate("/cart");


   };
    const { cart } = useSelector((state) => state);


    return (


        <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto">
            <Link to={"/"}>
                <div className="ml-5">
                    <h1 className="bg-gradient-to-br from-violet-900 to-purple-300 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold logo cursor-pointer tracking-wider">
                       SAMAT
                    </h1>
                </div>
            </Link>
            <div className="flex list-none items-center space-x-6 mr-5 text-gray-700 -tracking-tighterr font-semibold">
                <Link to={"/"}>
                    <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
                        Home
                    </li>
                </Link>
                <Link to={"/"}>
                    <li className="cursor-pointer hover:text-purple-500 transition duration-300 ease-in">
                        Feedback

                    </li>
                </Link>
                <Link to={"/cart"}>
                    <div className="relative">
                        <ShoppingBasket className="text-2xl cursor-pointer hover:text-purple-600 transition transform duration-200" />

                        {cart.length > 0 && (
                            <div className="absolute bg-purple-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                                {cart.length}
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </nav>
    )


}
export default Navbar


/*<nav className="navbar navbar-expand-lg py-4 navbar-light bg-light">

            <a className="navbar-brand px-3" href="" alt="SAMAT" >SAMAT</a>
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
                            <a className="dropdown-item" href="/JdShose">Jd Shoes </a>
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


                    <li className="cart-item">


                        <ShoppingBasket onClick={navigateToCart}/>

                        {cart.length > 0 && (
                            <span className="badge">{cart.length}</span>


                        )}

                    </li>
                </ul>
            </div>
        </nav>*/