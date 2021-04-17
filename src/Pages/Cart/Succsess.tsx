import Header from '@/Components/atoms/Header';
import React from 'react';
import { BiCheck } from 'react-icons/bi';
import Styles from './suc.scss';

const Succsess: React.FC =()=>{


    
    return(
        <div className={Styles.wrapper}>
            <div className={Styles.container}>
                <BiCheck/>
            </div>
        </div>
    )
}

export default Succsess;
