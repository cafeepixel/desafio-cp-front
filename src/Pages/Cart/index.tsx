import React, { useState } from 'react';
import Header from '@/Components/atoms/Header';
import Card from '@/Components/atoms/Card';
import styles from './cart.scss';
import Button from '@/Components/atoms/Button';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { Book } from '@/store/ducks/books/types';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@/store';
import { ICartItem } from '@/store/ducks/cart/types';
import { formatPrice } from '@/utils/format';
import { addSuccess, removeSuccess } from '@/store/ducks/cart/actions';
import { useHistory } from 'react-router';

const Cart: React.FC =()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((state:ApplicationState)=> state.cart)

    
    return(
        <>
        <Header>
            <p> Your Cart</p>
        </Header>
        <div className={styles.wrapper}>
        <div className={styles.container}>
        {state && state.data.length ? state.data.map(product=>(
                     <div className={styles.row}>
                     <div className={styles.cartGrid}>
                         <Card type="cardImg"><img src={product.book.image_url}/></Card>
                         <Card type="card">
                         <span className={styles.title}>{product.book.title}</span>
                         <span className={styles.sub}>{product.book.author}</span>
                             <span>{product.book.description}</span>
                             <div className={styles.price}>
                                 <span className={styles.price}>{formatPrice(product.book.prince_discount*product.amount)}</span>
                             </div>
                         </Card>
                     </div>
                     <div  className={styles.wrapperButtons}>
                         <Button color="btnCart" submit={false} icon={<BiPlus/>} onClick={()=>(dispatch(addSuccess(product.book)))}/>
                         <Button color="btnCart" submit={false} icon={<BiMinus/>} onClick={()=>(dispatch(removeSuccess(product.book)))}/>
                     </div>
                 </div>
                    )
                    ) : "Not exist Itens"}
           
            <div className={styles.checkoutWrapper}>
                <Button color="btnSecondary" submit={true} text="Continuar Comprando" onClick={()=>history.push('/')}/>
                <Button color="btnPrimary" submit={true} text="Checkout" onClick={()=>(state && state.data.length && history.push('/succsess'))} />

            </div>
        </div>
        </div>
        </>
    )
}

export default Cart;
