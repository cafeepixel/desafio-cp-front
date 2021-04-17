import Styles from './input.scss'

import React from 'react'
import { IconBaseProps } from 'react-icons/lib'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    children?:any
}

const Input:React.FC<Props> = ({children,...props}:Props)=>{
    return(
        <div className={Styles.container}>
            {children && children}
        <input {...props}
        name={props.name} 
        type={props.type}
        onChange={props.onChange}
        />
        </div>
    )
}

export default Input;