import styled from 'styled-components';

export const colorPickerSliderWrapperStyle = {
  position: 'relative',
  width: '320px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
};

export const colorPickerSliderTrackStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '6px',
  borderRadius: '0.5em',
  background: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)',
};

export const ColorPickerSliderThumb = styled.div`
  cursor: grab;
  box-sizing: border-box;
  border-radius: 100%;
  background: white;
  position: absolute;
  box-shadow: 0 0.1em 0.1em rgba(0,0,0,0.05);
  transform-origin: center;
  transform: translateX(-50%);
  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
  &:hover {
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0 0.4em 1em rgba(0,0,0,0.15);
    transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
  }
  &:active {
    transform: translateX(-50%) scale(0.975);
    cursor: grabbing;
    background: currentColor;
  }
`;
