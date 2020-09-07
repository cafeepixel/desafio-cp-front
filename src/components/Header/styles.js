import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 10vh;
  max-height: 116px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.h2`
    font-size: 22px;
    font-weight: bold;
`;

export const ContentLink = styled.ul`
  text-align: center;
  list-style-type: none;
  display: flex;
`

export const LinkText = styled.li`
  font-size: 12px;
  font-weight: 800; 
  color: ${props => props.check ? '#000' : '#5C6A79' }; 
  text-transform: uppercase;
  margin: 12px;
  padding: 5px;
`;

export const ContentIcon = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
`;
