import styled from 'styled-components';

const SIZE_THUMB = 36;

export const ColorPickerSliderWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 48px;
  display: flex;
  align-items: center;
  .color-picker-slider__track {
    width: 100%;
    height: 6px;
    border-radius: 0.5em;
    background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  }

  .color-picker-slider__thumb {
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    background: white;
    cursor: pointer;
    width: ${SIZE_THUMB}px;
    height: ${SIZE_THUMB}px;
    border-radius: 100%;
    box-sizing: border-box;
    border: 0.4em solid currentColor;
  }
`;
