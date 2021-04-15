import React from "react"
import Styles from "./navtop.scss"
import { BiUser, BiSearch, BiShoppingBag  } from 'react-icons/bi';
import { Link } from "react-router-dom";


const NavTop: React.FC = () =>{
    return (
        <div className={Styles.navtop}>
            <div className={Styles.brand}><a href="#">Bookstore</a></div>
            <div className={Styles.nav}>
                <Link to="/">Books</Link>
                <a href="#">Audiobooks</a>
                <a href="#">Stationery &amp; Gifts</a>
                <a href="#">Blog</a>
            </div>
            <div className={Styles.navRight}>
                <a href="#"><BiUser/></a>
                <a href="#"><BiSearch/></a>
                <a href="#"><BiShoppingBag/></a>
            </div>
        </div>

    );
}

export default NavTop;