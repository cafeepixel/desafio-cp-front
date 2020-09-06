import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/index'
import ImageHome from '../../components/ImageHome/index'
import ProductsHome from '../../components/ProductsHome/index'
import Footer from '../../components/Footer/index'
import axios from 'axios'






function Home() {
  /*  const [books, setBooks] = useState([])

    useEffect(() => {
        executeRequest()
      }, []); 

      const executeRequest = async () => {
        const response = await axios.get("http://localhost:3333/books").then((response) => {
            console.log(response.data)
            setBooks(response.data)
        }).catch(error => {
            console.log(error.response)
        })
    } */
          

    return(
        <>
        <Header/>
        <ImageHome/>
        <ProductsHome/>
        <Footer/>




        </>

    )







}

export default Home