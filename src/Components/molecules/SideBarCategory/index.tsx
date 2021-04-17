import { Category } from '@/store/ducks/categories/types';
import React from 'react';
import styles from "./sideBar.scss";

interface Props{
    children:any
}

const SideBarCategory: React.FC<Props> =({children}:Props)=>{

    return(

        <nav className={styles.sideBarNav}>
        <ul>

            {children}
            
        </ul>

        </nav>
    )
    }

    export default SideBarCategory;
