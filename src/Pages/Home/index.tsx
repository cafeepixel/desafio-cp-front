import Button from "@/Components/atoms/Button";
import React, { useEffect, useRef } from "react"
import Banner from "../Banner";
import Report from "../Book/Report";
import Styles from "./home.scss"
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "@/store";
import Header from "@/Components/atoms/Header";
import SideBarCategory from "@/Components/molecules/SideBarCategory";
import { loadForCategory } from "@/store/ducks/books/sagas";
import { loadForCategoryRequest } from "@/store/ducks/books/actions";
import { loadCategoriesRequest } from "@/store/ducks/categories/actions";
import { useHistory } from "react-router";
import { Category } from "@/store/ducks/categories/types";
import { executeScroll } from "@/utils/scrollTo";


const Home: React.FC = ()=> {
    const dispatch = useDispatch()
    const history = useHistory()
    const categories = useSelector((state:ApplicationState)=> state.categories.data)
    const myRef = useRef(null)

 
    useEffect(()=>{
        executeScroll(myRef)
    },[])

    useEffect(()=>{
        dispatch(loadCategoriesRequest())
    },[])

    const handleClick = (category:Category)=>{
        dispatch(loadForCategoryRequest(category))
        history.push(`/categories/${category.id}/books`)
    }

    return (
        <main ref={myRef} className={Styles.wrapper}>

        <div className={Styles.container}>

            <div className={Styles.banner}>
                <Banner/>
            </div>
            <div id="main" className={Styles.mainWrapper}>
                <div className={Styles.sideBar}>
                    <SideBarCategory>
                        {categories && categories.map(category=>(
                            <li key={category.id}><a onClick={()=>handleClick(category)}>{category.name}</a></li>
                        ))}
                    </SideBarCategory>
                </div>
                <div className={Styles.contentRight}>
                    <Report/>
                </div>
            </div>

        </div>
        </main>
    );
}

export default Home;