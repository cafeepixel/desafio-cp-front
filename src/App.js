import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routes';

import { BooksContextProvider } from './context/contextBooks';
import { GlobalStyle, Container, ContentPages } from './styles';


function App() {
  return (
    <>
      <GlobalStyle />
      <BooksContextProvider>
        <BrowserRouter>
          <Container>
            <Header />
            <ContentPages>
              <Router />
            </ContentPages>
          </Container>
        </BrowserRouter>
      </BooksContextProvider>
    </>

  );
}

export default App;
