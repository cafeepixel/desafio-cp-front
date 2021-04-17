import React, { Dispatch, useEffect, useState } from "react"
import Styles from "./style.scss"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import {ApplicationState} from "@/store";
import  { loadRequest } from "@/store/ducks/books/actions"
import GridBooks from "@/Components/GridBooks";

interface Props {
}


const Report: React.FC<Props> = ()=> {

    const state = useSelector((state: ApplicationState) => state.books.data); 



    return (
        <div className={Styles.container}>
            <div>
                {state && state.map(book=>(
                    <GridBooks item={book}/>
                ))}
                </div>
        </div>
    );
}

export default Report;