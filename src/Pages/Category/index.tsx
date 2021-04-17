import { ApplicationState } from '@/store';
import { loadCategoriesRequest } from '@/store/ducks/categories/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './category.scss';

const Category: React.FC =()=>{
    const dispatch = useDispatch()

    const state = useSelector((category:ApplicationState)=> category.categories.data)

    useEffect(()=>{
        dispatch(loadCategoriesRequest())
    },[])

    return(
        <nav className={styles.sideBarNav}>
            <ul>
                {state && state.map(category=>(
                    <li key={category.id}><a>{category.name}</a></li>
                ))}
                
            </ul>

        </nav>
    )
}

export default Category;
