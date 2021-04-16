import { Book } from '@/store/ducks/books/types';
import { formatPrice } from '@/utils/format';
import React from 'react';
import Button from '../Button';
import Card from '../Card';
import styles from "./card.scss"

interface Props{
    item: Book
}
const GridBooks: React.FC<Props> =({item}:Props)=>{
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
                    <Button color="btnPrimary" submit={true} text="Buy Now"/>
            </Card>
        </div>
    )
}

export default GridBooks;