import React, {useEffect, useState} from 'react'
import * as S from './styled'
import Point from '../../images/Ellipse 3.png'
import axios from 'axios'
import BraveImg from '../../images/brave_new_world.svg'
import EducatedImg from '../../images/educated.svg'
import CrazyImg from '../../images/crazy_rich_asians.svg'
import HandmaidsImg from '../../images/the_handmaids_tale.svg'
/*import { Link } from 'react-router-dom'*/


function ProductsHome() {
    const [books, setBooks] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3333/books').then((response) => {
            setBooks(response.data)
        }).catch(error => {
            console.log(error.response)
        })
        
      }, []); 

    console.log(books[0])

    return(
        <>
        <S.Container>

        <S.ListGender>
        <S.List>
            <S.ListItem1><S.Point src={Point} alt="ponto" />Categories</S.ListItem1>
            <S.ListItem>Art & Fashion</S.ListItem>
            <S.ListItem>Biography</S.ListItem>
            <S.ListItem>Business</S.ListItem>
            <S.ListItem>Children`s</S.ListItem>
            <S.ListItem>Education</S.ListItem>
            <S.ListItem>Fiction & Poetry</S.ListItem>
            <S.ListItem> Education</S.ListItem>
            <S.ListItem>Film, TV & Drama</S.ListItem>
            <S.ListItem>Food & Drink</S.ListItem>
            <S.ListItem>Film, TV & Drama</S.ListItem>
            <S.ListItem>Health & Wellbeing</S.ListItem>
            <S.ListItem>History & Politics</S.ListItem>
            <S.ListItem>Home & Garden</S.ListItem>
            <S.ListItem>Languages with Grant</S.ListItem>
            <S.ListItem>Sport & Hobbies</S.ListItem>
            <S.ListItem>Travel & Maps</S.ListItem>     
        </S.List>
        </S.ListGender>


         {books.map(function (book) {
          return  <S.ContainerProducts>
          <div>    
          <img src={BraveImg} alt="brave" />
          </div>
  
          <S.Description>
          <S.Autor>{book.author}</S.Autor>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.Review>{book.review}</S.Review>
          <S.BookData>{book.description}</S.BookData>
          <S.Price>{book.price}</S.Price><S.Price2>{book.prince_discount}</S.Price2><br/>
          <S.Button>BUY NOW</S.Button>
          </S.Description>
  
      </S.ContainerProducts>
        })}  

    
        </S.Container>
        
                
        </>


    )


}
export default ProductsHome