import styled from 'styled-components'


export const Container = styled.div`
    display: grid;
    grid-template-rows: 350px 350px;
    grid-template-columns: 356px 500px 500px;
    height: 1028px;
   /* background-color: purple; */
    background-image: url("https://images2.imgbox.com/69/44/6sQHXFIr_o.png");
    background-repeat: no-repeat;
    padding-top: 25px;



`

export const ListGender = styled.div`
    display: flex;
    justify-content: center;
    width: 416px;
    height: 722px;
    




`

export const List = styled.ul`
    margin-top: 19px;



`

export const ListItem1 = styled.li`
font-family: 'Montserrat', sans-serif;
list-style-type: none;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
text-transform: capitalize;


`


export const ListItem  = styled.li`
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: capitalize;
    margin-top: 23px;
    color: #5C6A79;
    

` 

export const Point = styled.img`
    padding-right: 14px;

`

export const ContainerProducts = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;



`
export const Button = styled.button`
    width: 176px;
    height: 45px;
    color: white;
    font-family: Montserrat;
    background-color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    line-height: 10px;
    text-transform: uppercase;
    color: #4C3DB2;
    margin-top: 16px;
    border: 1px solid;
    



` 


export const Description = styled.div`
   max-width: 176px;
   margin-right: 75px;
   grid-column-start: 1;
   grid-column-end: 2;
   grid-row-start: 1;
   grid-row-end: 3; 

`

export const BookTitle = styled.p`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
color: #1C2A39;


`

export const Autor = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    text-transform: capitalize;
    color: #5C6A79;
    margin-bottom: 4px;

`

export const BookData = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    text-transform: capitalize;
    color: #5C6A79;
    margin-top: 16px;
    margin-bottom: 16px;



`
export const Price = styled.span`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 16px;
text-transform: uppercase;


`

export const Price2 = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 16px;
text-decoration-line: line-through;
text-transform: uppercase;
color: #BDBDBD;
margin-left: 6px;


`

export const Review = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 14px;
color: #5C6A79;



`