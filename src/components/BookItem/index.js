import React from 'react';

import { Container, Cover } from './styles';

function BookItem({srcImage}) {
  return (
      <Container>
          <Cover src={srcImage}/>
      </Container>

  );
}

export default BookItem;