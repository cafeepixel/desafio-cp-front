import React from 'react';
import styles from "./card.scss"

interface Props{
    children: any;
    type?: string
}
const Card: React.FC<Props> =({type,children}:Props)=>{
    return(
        <div className={type==="card"?styles.card:styles.cardImg}>
                {children}
        </div>
    )
}

export default Card;