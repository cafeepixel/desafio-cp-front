import React from 'react'
import * as S from './styled'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Check from '../../images/check (1).png'

function Done() {
    return(
        <>
        <Header/>
         <S.Container>
            
            <S.CheckImg src={Check} alt="imagem check"/>
            <S.ContainerText>
            <S.TextDone>The challenge as been<br/>completed</S.TextDone> 
            </S.ContainerText>

         </S.Container>      
         <Footer/>    
             
             
                    
        </>


    )

}

export default Done