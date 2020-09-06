import styled from 'styled-components'
import {User} from '@styled-icons/boxicons-regular/User'
import {Search} from '@styled-icons/evil/Search'
import {Lock} from '@styled-icons/bootstrap/Lock'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 116px;
    width: 100%;
    


`

export const Title = styled.div`
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight: bold;


`

export const Icons = styled.div`


`


export const Menu = styled.div`




`

export const Item = styled.span`
    font-size: 10px;
    margin-left: 40px;
    font-family: 'Montserrat', sans-serif;

`
export const Item1 = styled.span`
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;


`
export const UserIcon = styled(User)`
    color: #1C2A39;
    width: 15px;
    



`

export const SearchIcon = styled(Search)`
width: 17px;
margin-left: 42.16px;
color: #1C2A39;

`

export const LockIcon = styled(Lock)`
    color: #1C2A39;  
    width: 15px;
    margin-left: 42.16px;
    

`