import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import {
  imagePool,
} from './constants';

const sign = () => (Math.floor(Math.random() * 10) % 2 === 0 ? 1 : -1);
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
const getRandomImage = () => imagePool[Math.floor(Math.random() * imagePool.length)];

const transformAnimation = () => {
  const x = sign() * 1000 * Math.random();
  const y = sign() * 1000 * Math.random();
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

  background: url(${props => props.imageUrl});
  background-size:cover;
  background-position:center;

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

  animation : ${() => transformAnimation()} ${props => props.delay}s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    font-size: 9px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #ffc700;
    opacity: 0.7;
  }
`;

const Puzzle = ({
  positions,
  charIndex,
  isActive,
}) => {
  return (
    <PuzzleWrapper>
      {
        isActive &&
        positions.map((pos, index) => (
          <PuzzleBox
            key={index}
            pos={pos}
            delay={(charIndex + 1) * 0.6 + 0.8}
            imageUrl={getRandomImage()}
          />
        ))
      }
    </PuzzleWrapper>
  );
};

Puzzle.propTypes = {
  positions: PropTypes.array,
  boxWidth: PropTypes.number,
  charIndex: PropTypes.number,
};

Puzzle.defaultProps = {
  positions: [],
  boxWidth: 0,
  charIndex: 0,
};

export default Puzzle;
