import React, { useState, memo, useCallback } from 'react';
import ColorPickerSlider from 'components/ColorPickerSlider';
import CharBox from './CharBox';

import {
  StyledHeader,
  CollageImagesWrapper,
  OperatorWrapper,
} from './Styled';

const CollageImages = memo(() => {
  // const text = '1234567890';
  const [isActive, setIsActive] = useState(true);
  const [pickedColor, setPickedColor] = useState('#f00');
  const text = '404';
  const indexKey = (index) => index;

  const handleGetPickedColor = useCallback((color) => {
    setPickedColor(color);
  }, []);

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
              color={pickedColor}
            />
          ))
        }
      </StyledHeader>
      <OperatorWrapper>
        <button type="button" onClick={handleRepeatAnimation}>Repeat Animation</button>
        <ColorPickerSlider handleGetColor={handleGetPickedColor} />
      </OperatorWrapper>
    </CollageImagesWrapper>
  );
});

export default CollageImages;
