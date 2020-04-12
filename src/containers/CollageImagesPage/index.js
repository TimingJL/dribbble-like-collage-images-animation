import React, { useState, memo, useCallback } from 'react';
import ColorPickerSlider from 'components/ColorPickerSlider';
import { COLOR_RED } from 'components/ColorPickerSlider/constants';
import Character from './Character';
import {
  Message,
  CollageContainer,
  OperatorWrapper,
  RepeatAnimation,
} from './Styled';

const CollageImagesPage = memo(() => {
  const [isActive, setIsActive] = useState(true);
  const [pickedColor, setPickedColor] = useState(COLOR_RED);
  const elements = '404';
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
      <CollageContainer size={elements.length}>
        {
          elements.split('').map((element, index) => (
            <Character
              key={indexKey(index)}
              element={element}
              elementIndex={index}
              isActive={isActive}
              color={pickedColor}
            />
          ))
        }
      </CollageContainer>
      <OperatorWrapper>
        <ColorPickerSlider handleGetColor={handleGetPickedColor} />
        <RepeatAnimation type="button" onClick={handleRepeatAnimation}>Repeat Animation</RepeatAnimation>
      </OperatorWrapper>
    </>
  );
});

export default CollageImagesPage;
