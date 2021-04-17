import React from 'react';
import styles from "./button.scss"

interface Props{
    text?: string,
    color: string
    submit: boolean
    icon?: any
    onClick?:any
}
const Button: React.FC<Props> =({text, color, submit, icon, onClick}:Props)=>{
    return(
        <button className={color==="btnPrimary"?styles.btnPrimary: 
        color==="btnCart" && styles.btnCart} type={submit?"submit":"button"} onClick={onClick}>
            {text || icon}
        </button>
    )
}

export default Button;