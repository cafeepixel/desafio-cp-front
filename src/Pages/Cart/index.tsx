import React, { useState } from 'react';
import Header from '@/Components/atoms/Header';
import Card from '@/Components/atoms/Card';
import styles from './cart.scss';
import Button from '@/Components/atoms/Button';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { Book } from '@/store/ducks/books/types';

const Cart: React.FC =()=>{
    const [items, setItems] = useState()

    const handleAddProduct = () =>{
        
    }
    return(
        <>
        <Header>
            <p>Your Cart</p>
        </Header>
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.cartGrid}>
                    <Card type="cardImg"><img src=""/></Card>
                    <Card type="card"><img src=""/>
                    <span className={styles.title}>Nome Livro</span>
                    <span className={styles.sub}>Nome author</span>
                        <span>desc</span>
                        <div className={styles.price}>
                            <span className={styles.price}>15,00</span>
                        </div>
                    </Card>
                </div>
                <div  className={styles.wrapperButtons}>
                    <Button color="btnCart" submit={false} icon={<BiPlus/>}/>
                    <Button color="btnCart" submit={false} icon={<BiMinus/>}/>
                </div>
            </div>
            <div className={styles.checkoutWrapper}>
                <Button color="btnPrimary" submit={true} text="Checkout"/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Cart;
