import React from 'react';
import styles from "./button.scss"

interface Props{
    text?: string,
    color: string
    submit: boolean
    icon?: any
}
const Button: React.FC<Props> =({text, color, submit, icon}:Props)=>{
    return(
        <button className={color==="btnPrimary"?styles.btnPrimary: 
        color==="btnCart" && styles.btnCart} type={submit?"submit":"button"}>
            {text || icon}
        </button>
    )
}

export default Button;