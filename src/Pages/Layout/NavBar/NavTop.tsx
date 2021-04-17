import React, { useEffect, useState } from "react"
import Styles from "./navtop.scss"
import { BiUser, BiSearch, BiShoppingBag  } from 'react-icons/bi';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadForTitle } from "@/store/ducks/books/sagas";
import { loadForTitleRequest, loadRequest } from "@/store/ducks/books/actions";
import { Book } from "@/store/ducks/books/types";
import Input from "@/Components/Input";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const NavTop: React.FC = () =>{
    const dispatch = useDispatch()
    const [search, setSearch] = useState<string>()

    useEffect(()=>{
        if(!search){
        dispatch(loadRequest())
        }
        
    },[search])

    const handleSearchClick = ()=>{
        dispatch(loadForTitleRequest(search))
    }

    return (
        <div className={Styles.container}>
        <div className={Styles.navtop}>
            <div className={Styles.brand}><a href="#">Bookstore</a></div>
            <div className={Styles.nav}>
                <Link to="/">Books</Link>
                <a href="#">Audiobooks</a>
                <a href="#">Stationery &amp; Gifts</a>
                <a href="#">Blog</a>
            </div>
            <div><Input type="text" placeholder="Search for Title" name="search" onChange={(e)=>{setSearch(e.target.value)}}>
                    <AnchorLink href='#main'><BiSearch onClick={handleSearchClick}/></AnchorLink>   
                </Input>
            </div>
            <div className={Styles.navRight}>
                <a href="#"><BiUser/></a>
                <a href="#"><BiSearch/></a>
                <Link to="/cart"><BiShoppingBag/></Link>
            </div>
        </div>
        </div>

    );
}

export default NavTop;