import React, { useContext, useEffect } from 'react';

import BookContext from '../../context/contextBooks';


import bannerImage from '../../assets/banner.png';

import Category from '../../components/Category';
import ListBook from '../../components/ListBook';
import BookItem from '../../components/BookItem';
import { Container, Banner, BannerImage, ContentCategory } from './styles';

function Book() {
  const { books } = useContext(BookContext);

books.map(item => {
   console.log(item.image_url);
});

  return (
    <>
      <Container>
        <Banner>
          <BannerImage src={bannerImage} atl="banner" />
        </Banner>
        <ContentCategory>
          <Category />
          <ListBook>
            {books.map(item => (
              <BookItem srcImage={item.image_url} key={item.id} />
            ))}
          </ListBook>
        </ContentCategory>
      </Container>

    </>
  );
}

export default Book;