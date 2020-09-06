import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routes';
import { GlobalStyle, Container, ContentPages } from './styles';


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <Header />
          <ContentPages>
            <Router />
          </ContentPages>
        </Container>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
