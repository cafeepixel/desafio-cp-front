import React from 'react';

import bannerImage from '../../assets/banner.png';
import { Banner, BannerImage } from './styles';

function Book() {
  return (
      <>
        <Banner>
            <BannerImage src={bannerImage} atl="banner" />
        </Banner>
      </>
  );
}

export default Book;