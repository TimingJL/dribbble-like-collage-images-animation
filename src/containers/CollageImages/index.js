import React from 'react';
import CharBox from './CharBox';

import {
  StyledHeader,
  CollageImagesWrapper,
} from './Styled';

const CollageImages = () => {
  // const text = '1234567890';
  const text = '404';
  const indexKey = (index) => index;
  return (
    <CollageImagesWrapper>
      <StyledHeader text={text}>
        {
          text.split('').map((char, index) => (
            <CharBox
              key={indexKey(index)}
              char={char}
            />
          ))
        }
      </StyledHeader>
    </CollageImagesWrapper>
  );
};

export default CollageImages;
