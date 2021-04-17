import React, { useEffect, useRef, useState } from "react"
import Styles from "./navtop.scss"
import { BiUser, BiSearch, BiShoppingBag  } from 'react-icons/bi';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadForTitle, loadForTitleCategory } from "@/store/ducks/books/sagas";
import { loadForCategoryRequest, loadForTitleCategoryRequest, loadForTitleRequest, loadRequest } from "@/store/ducks/books/actions";
import { Book } from "@/store/ducks/books/types";
import Input from "@/Components/atoms/Input";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ApplicationState } from "@/store";
import { Category } from "@/store/ducks/categories/types";
import { access } from "node:fs";
import { ICartItem } from "@/store/ducks/cart/types";


const NavTop: React.FC = () =>{
    const dispatch = useDispatch()
    const [search, setSearch] = useState<string>()
    const [searchCategory, setSearchCategory] = useState<string>()
    const state = useSelector((category:ApplicationState)=> category.categories)
    const cart = useSelector((state:ApplicationState)=> state.cart)

    useEffect(()=>{
        if(!search){
            dispatch(loadRequest())
            }else{
                dispatch(loadForTitleRequest(search))
                window.scrollTo(0,800)
            }        
    },[search])

    useEffect(()=>{
        const objSearch = {
            categoryId: state.actived && state.actived.id,
            title: searchCategory

        }
        const category = state.actived && state.actived;
        if(!searchCategory){
            dispatch(loadForCategoryRequest(category)) 
            }else{
                dispatch(loadForTitleCategoryRequest(objSearch))
            }        
    },[searchCategory])

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
            <div>
                {!state.actived ? (
                    <Input 
                    type="text" 
                    placeholder="Search for Title" 
                    name="search"
                    onChange={(e)=>{setSearch(e.target.value)}}
                    >
                        <BiSearch />   
                    </Input>
                ):(

                    <Input 
                    type="text" 
                    placeholder="Search for Title in Category" 
                    name="searchCategory"
                    onChange={(e)=>{setSearchCategory(e.target.value)}}
                    >
                        <BiSearch/>   
                    </Input>
                )}


            </div>
            <div className={Styles.navRight}>
                <a href="#"><BiUser/></a>
                <a href="#"><BiSearch/></a>
                <Link to="/cart"><BiShoppingBag/> { cart && cart.data ? cart.data.length
                : 0} </Link>
            </div>
        </div>
        </div>

    );
}

export default NavTop;