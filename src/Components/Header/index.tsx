import React from 'react';
import styles from "./header.scss"

interface Props{
    children: any;
}
const Header: React.FC<Props> =({children}:Props)=>{
    return(
        <header className={styles.HeadMain}>
            <div>
                {children}
            </div>
        </header>
    )
}

export default Header;