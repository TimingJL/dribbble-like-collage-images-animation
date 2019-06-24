import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import {
  imagePool,
} from './constants';

const signed = () => (Math.floor(Math.random() * 10) % 2 === 0 ? 1 : -1);
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
const getRandomImage = () => imagePool[Math.floor(Math.random() * imagePool.length)];

const transformAnimation = () => {
  const x = signed() * 1000 * Math.random();
  const y = signed() * 1000 * Math.random();
  const z = 500 * Math.random();
  const s = getRandomArbitrary(2, 10);
  return keyframes`
    0% {
      opacity: 0;
      transform: translateX(${x}px) translateY(${y}px) translateZ(${z}px) scale(${s});
    }
    100% {
      opacity: 1;
      transform: translateX(0px) translateY(0px) translateZ(0px) scale(1);
    }
  `;
};

const PuzzleWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const PuzzleBox = styled.div`
  position: absolute;
  width: 18%;
  height: 6%;
  border-radius: 5px;

  background-image: url(${(props) => props.imageUrl}), linear-gradient(${(props) => props.color}, ${(props) => props.color});
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;

  left: ${(props) => `${props.pos[0]}%;`};
  top: ${(props) => `${props.pos[1]}%;`};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    z-index: 1;
    transform: scale(1.5);
    box-shadow: 0 5px 30px rgba(0,0,0,0.3);
    transition: all 0.1s ease-in-out;
  }

  animation : ${() => transformAnimation()} ${(props) => props.delay}s ease-in-out;
`;

const Puzzle = memo(({
  positions,
  charIndex,
  isActive,
  color,
}) => (
  <PuzzleWrapper>
    {
        isActive &&
        positions.map((pos, index) => (
          <PuzzleBox
            key={index}
            pos={pos}
            delay={(charIndex + 1) * 0.6 + 0.8}
            imageUrl={getRandomImage()}
            color={color}
          />
        ))
      }
  </PuzzleWrapper>
));

Puzzle.propTypes = {
  positions: PropTypes.array,
  isActive: PropTypes.bool,
  charIndex: PropTypes.number,
  color: PropTypes.string,
};

Puzzle.defaultProps = {
  positions: [],
  isActive: false,
  charIndex: 0,
  color: '',
};

export default Puzzle;
