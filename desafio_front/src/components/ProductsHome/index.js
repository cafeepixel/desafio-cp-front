import React, {useEffect, useState} from 'react'
import * as S from './styled'
import Point from '../../images/Ellipse 3.png'
import axios from 'axios'
import Brave from '../../images/brave_new_world.svg'


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


     { /*  <S.ContainerProducts>
        <div>    
        <img src={Brave} alt="brave" />
        </div>

        <S.Description>
        <S.Autor>Aldous Huxley</S.Autor>
        <S.BookTitle>Brave new world</S.BookTitle>
        <S.Review>1,3M review</S.Review>
        <S.BookData>dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in..</S.BookData>
        <S.Price>R$12.43</S.Price><S.Price2>R$42.50</S.Price2><br/>
        <S.Button>BUY NOW</S.Button>
        </S.Description>

    </S.ContainerProducts> 

    <S.ContainerProducts>
        <div>    
        <img src={Brave} alt="brave" />
        </div>

        <S.Description>
        <S.Autor>Aldous Huxley</S.Autor>
        <S.BookTitle>Brave new world</S.BookTitle>
        <S.Review>1,3M review</S.Review>
        <S.BookData>dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in..</S.BookData>
        <S.Price>R$12.43</S.Price><S.Price2>R$42.50</S.Price2><br/>
        <S.Button>BUY NOW</S.Button>
        </S.Description>

    </S.ContainerProducts> 

    <S.ContainerProducts>
        <div>    
        <img src={Brave} alt="brave" />
        </div>

        <S.Description>
        <S.Autor>Aldous Huxley</S.Autor>
        <S.BookTitle>Brave new world</S.BookTitle>
        <S.Review>1,3M review</S.Review>
        <S.BookData>dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in..</S.BookData>
        <S.Price>R$12.43</S.Price><S.Price2>R$42.50</S.Price2><br/>
        <S.Button>BUY NOW</S.Button>
        </S.Description>

    </S.ContainerProducts> 

    <S.ContainerProducts>
        <div>    
        <img src={Brave} alt="brave" />
        </div>

        <S.Description>
        <S.Autor>Aldous Huxley</S.Autor>
        <S.BookTitle>Brave new world</S.BookTitle>
        <S.Review>1,3M review</S.Review>
        <S.BookData>dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in..</S.BookData>
        <S.Price>R$12.43</S.Price><S.Price2>R$42.50</S.Price2><br/>
        <S.Button>BUY NOW</S.Button>
        </S.Description>

    </S.ContainerProducts>  */}


        {books.map(function (book) {
          return  <S.ContainerProducts>
          <div>    
          <img src={Brave} alt="brave" />
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