import React, { useState, memo, useCallback } from 'react';
import ColorPickerSlider from 'components/ColorPickerSlider';
import CharBox from './CharBox';

import {
  Message,
  StyledHeader,
  OperatorWrapper,
  RepeatAnimation,
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
    <>
      <Message>
        <h1 className="message__title">Wow, this page is awesome!</h1>
        <p className="message__content">While you’re here, feast your eyes upon these tantalizing popular designs matching the color.</p>
      </Message>
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
        <ColorPickerSlider handleGetColor={handleGetPickedColor} />
        <RepeatAnimation type="button" onClick={handleRepeatAnimation}>Repeat Animation</RepeatAnimation>
      </OperatorWrapper>
    </>
  );
});

export default CollageImages;
