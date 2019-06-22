import styled from 'styled-components';
import {
  COLOR_RED,
  COLOR_YELLOW,
  COLOR_GREEN,
  COLOR_BLUE_LIGHT,
  COLOR_BLUE_DARK,
  COLOR_PURPLE,
} from './constants';

export const colorPickerSliderWrapperStyle = {
  transform: 'translateY(-20px)',
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
  background: `linear-gradient(to right, ${COLOR_RED}, ${COLOR_YELLOW}, ${COLOR_GREEN}, ${COLOR_BLUE_LIGHT}, ${COLOR_BLUE_DARK}, ${COLOR_PURPLE}, ${COLOR_RED})`,
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
