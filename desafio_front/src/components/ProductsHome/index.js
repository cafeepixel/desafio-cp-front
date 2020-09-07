import React, {useEffect, useState} from 'react'
import * as S from './styled'
import Point from '../../images/Ellipse 3.png'
import axios from 'axios'
import BraveImg from '../../images/brave_new_world.svg'
import EducatedImg from '../../images/educated.svg'
import CrazyImg from '../../images/crazy_rich_asians.svg'
import HandmaidsImg from '../../images/the_handmaids_tale.svg'



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
            <S.ListItem><S.Linki to="/business">Art & Fashion</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Biography</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Business</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Children`s</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Education</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Fiction & Poetry</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business"> Education</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Film, TV & Drama</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Food & Drink</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Film, TV & Drama</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Health & Wellbeing</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">History & Politics</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Home & Garden</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Languages with Grant</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Sport & Hobbies</S.Linki></S.ListItem>
            <S.ListItem><S.Linki to="/business">Travel & Maps</S.Linki></S.ListItem>     
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
          <S.Button><S.Linki to="/cart">BUY NOW</S.Linki></S.Button>
          </S.Description>
  
      </S.ContainerProducts>
        })}  

    
        </S.Container>
        
                
        </>


    )


}
export default ProductsHome