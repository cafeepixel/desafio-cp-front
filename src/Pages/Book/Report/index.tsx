import React, { Dispatch, useEffect, useState } from "react"
import Styles from "./style.scss"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import {ApplicationState} from "@/store";
import  { loadRequest, loadSuccess, loadFailure } from "@/store/ducks/books/actions"

interface Props {
}

const mapState = (state: ApplicationState) => ({
    data: state.books.data,
    loading: state.books.loading,
    error: state.books.error,
  });
  
  const mapActions = {
    loadRequest, loadSuccess, loadFailure
  };

const Report: React.FC<Props> = ()=> {
    const dispatch = useDispatch();

    const state = useSelector((state: ApplicationState) => state.books.data); 

    useEffect(() => {
            dispatch(loadRequest());
    },[]);

    console.log(state && state)


    return (
        <div className={Styles.container}>
            <div>
                {state && state.map(book=>(
                    <div className={Styles.cardWrapper}>
                    <div className={Styles.cardImg}><img src={book.image_url}/></div>
                    <div  className={Styles.card}>
                        <span>Cantor</span>
                        <span className={Styles.title}>Cantor</span>
                        <div className={Styles.headBarTitle}>
                            <span>icon star</span>
                            <span>252 reviews</span>
                        </div>
                        <span>paragraph</span>
                        <div className={Styles.price}>
                            <span className={Styles.priceSale}>R$ 14,90</span>
                            <span className={Styles.priceOld}>R$ 20,90</span>
                        </div>
                        <button type="button">Buy Now</button>
                    </div>
                </div>
                ))}
                </div>



        </div>
    );
}

export default Report;