import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
    height: 100vh;

`;

export const ContainerError = styled.div`
    display: flex;
    flex:1;
    height: 10vh;
    align-items: flex-start;
    justify-content: space-between;
    background: #a52a2aa9;
    flex-direction: row-reverse;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
    span {
      display: flex;
      flex: 1;
      flex-direction: row-reverse;
      color: #fff;
      svg{
        font-weight: 700;
        font-size: 20px;
      }
      &:hover svg{
        cursor: pointer;
        color: #ddd;
      }
    }

`;

export const ContainerUser = styled.div`
    display: flex;
    flex:1;
    height: 10vh;
    padding-left: 30px;
    background: #26bd00a9;
    flex-direction: row-reverse;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
    span {
      display: flex;
      flex: 1;
      flex-direction: row-reverse;
      color: #fff;
      svg{
        font-weight: 700;
        font-size: 20px;
      }
      &:hover svg{
        cursor: pointer;
        color: #ddd;
      }
    }

`;

export const TextError = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    span{
      color: #fff;
      font-size: 12px;
      font-weight: bold;
    }


`;

export const Header = styled.div`
    display: flex;

`;

export const Brand = styled.h2`
    font-weight: 700;
    color: #4C3DB2;
    text-decoration: none;
    font-size: 24px;
    h1 {
        color: #4C3DB2;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    min-width: 30vw;
    height: 400px;
    background: #FFF;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
    button {
      margin-top: 20px;
    }
    div {
      margin-top: 10px;
    }


`;

// Create the keyframes
const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Transition = styled.div`
  display: inline-block;
  animation: ${rotate} .5s ease-in ;
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;