import React, { Dispatch, useEffect, useState } from "react"
import Styles from "./style.scss"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import {ApplicationState} from "@/store";
import  { loadRequest } from "@/store/ducks/books/actions"
import GridBooks from "@/Components/molecules/GridBooks";
import { Book } from "@/store/ducks/books/types";
import { useHistory } from "react-router";
import {  addSuccess } from "@/store/ducks/cart/actions";
import { ICartItem } from "@/store/ducks/cart/types";

interface Props {
}


const Report: React.FC<Props> = ()=> {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state: ApplicationState) => state.books.data); 

    const handleBuyClick=(book:Book)=>{
        const {id, author, title, description, image_url, prince_discount} = book;
        dispatch(addSuccess(book))
        history.push("/cart")
    }

    return (
        <div className={Styles.container}>
            <div>
                {state && state.map(book=>(
                    <GridBooks item={book} onClick={()=>handleBuyClick(book)}/>
                ))}
                </div>
        </div>
    );
}

export default Report;