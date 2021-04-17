import Card from '@/Components/atoms/Card';
import { Book } from '@/store/ducks/books/types';
import { formatPrice } from '@/utils/format';
import React from 'react';
import Button from '../../atoms/Button';
import styles from "./card.scss"

interface Props{
    item: Book
    onClick?: any
}
const GridBooks: React.FC<Props> =({onClick, item}:Props)=>{
    return(
        <div className={styles.cardWrapper}>
            <Card type="cardImg">
                <img src={item.image_url}/>
            </Card>
            <Card type="card">
                    <span className={styles.title}>{item.author}</span>
                    <div className={styles.headBarTitle}>
                        <span>icon star</span>
                        <span>{`${item.review} reviews`}</span>
                    </div>
                    <span>{item.description}</span>
                    <div className={styles.price}>
                        <span className={styles.priceSale}>{formatPrice(item.prince_discount)}</span>
                        <span className={styles.priceOld}>{formatPrice(item.price)}</span>
                    </div>
                    <Button color="btnPrimary" submit={false} text="Buy Now" onClick={onClick}/>
            </Card>
        </div>
    )
}

export default GridBooks;