import React from 'react'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import * as S from './styled'
import EducatedImg from '../../images/educated.svg'
import CrazyImg from '../../images/crazy_rich_asians.svg'




function Cart() {
    return(
        <>

        <Header/>

        <S.Title>
          <S.TitleBussiness>Your cart</S.TitleBussiness>
        </S.Title>

        <S.Container>
        <S.ContainerBook>
          <S.Wrapper>      
         <S.ContainerImage>   
          <S.Image src={CrazyImg} />
         </S.ContainerImage>  

        <S.Descriptions>
        <S.Title2>Crazy rich asians</S.Title2>
        <S.Author>Kevin Kwan</S.Author>
        <S.Descript>the outrageously funny debut novel about three super-rich,<br/> pedigreed Chinese families and the gossip..</S.Descript>
        <S.Valor>R$14.99</S.Valor>
        <S.ValorFinal>1x R$14.99</S.ValorFinal>         
        </S.Descriptions> 
        </S.Wrapper>

        <S.TwoButtons>
        <S.Button>-</S.Button>
        <S.Button2>+</S.Button2> 
        </S.TwoButtons> 

        </S.ContainerBook>

        <S.ContainerSend>
        <S.ButtonSend><S.Linki to="/done">CHECKOUT</S.Linki></S.ButtonSend>
        </S.ContainerSend>

        </S.Container>
        
        <Footer/>
        
        
        </>


    )



}

export default Cart