import Header from '@/Components/atoms/Header';
import SideBarCategory from '@/Components/molecules/SideBarCategory';
import { ApplicationState } from '@/store';
import { loadForCategoryRequest } from '@/store/ducks/books/actions';
import { loadCategoriesRequest } from '@/store/ducks/categories/actions';
import { Category } from '@/store/ducks/categories/types';
import { executeScroll } from '@/utils/scrollTo';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Report from '../Book/Report';
import Styles from './category.scss';




const Category: React.FC =()=>{
    const dispatch = useDispatch()
    const history = useHistory()
    const myRef = useRef(null)



   useEffect(()=>{
    executeScroll(myRef)
   },[])


    const state = useSelector((category:ApplicationState)=> category.categories)



    useEffect(()=>{
        dispatch(loadCategoriesRequest())
    },[])

    const handleClick = (category:Category)=>{
        dispatch(loadForCategoryRequest(category))
        history.push(`/categories/${category.id}/books`)
    }

    return(
        <main ref={myRef} className={Styles.wrapper}>

        <div className={Styles.container}>
                <Header><p>{state.actived?state.actived.name:"Any Category Selected"}</p></Header>

            <div id="main" className={Styles.mainWrapper}>
                <div className={Styles.sideBar}>
                    <SideBarCategory>
                        {state && state.data.map(category=>(
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
    )
}

export default Category;
