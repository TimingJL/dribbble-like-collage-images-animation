import React, { useState, useCallback } from 'react';
import CharBox from './CharBox';

import {
  StyledHeader,
  CollageImagesWrapper,
  OperatorWrapper,
} from './Styled';

const CollageImages = () => {
  // const text = '1234567890';
  const [isActive, setIsActive] = useState(true);
  const text = '404';
  const indexKey = (index) => index;

  const handleRepeatAnimation = () => {
    setIsActive(false);
    setTimeout((() => setIsActive(true)), 100);
  };
  return (
    <CollageImagesWrapper>
      <StyledHeader text={text}>
        {
          text.split('').map((char, index) => (
            <CharBox
              key={indexKey(index)}
              char={char}
              charIndex={index}
              isActive={isActive}
            />
          ))
        }
      </StyledHeader>
      <OperatorWrapper>
        <button onClick={handleRepeatAnimation}>Repeat Animation</button>
      </OperatorWrapper>
    </CollageImagesWrapper>
  );
};

export default CollageImages;
