import React from 'react';
import {
  ColorPickerSliderWrapper,
} from './Styled';

const ColorPickerSlider = () => (
  <ColorPickerSliderWrapper>
    <div className="color-picker-slider__track">
      <div className="color-picker-slider__thumb" />
    </div>
  </ColorPickerSliderWrapper>
);

export default ColorPickerSlider;
