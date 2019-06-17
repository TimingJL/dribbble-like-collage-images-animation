import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const sign = () => (Math.floor(Math.random() * 10) % 2 === 0 ? 1 : -1);
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const transformAnimation = () => {
  const x = sign() * 1000 * Math.random();
  const y = sign() * 1000 * Math.random();
  const z = 500 * Math.random();
  const s = getRandomArbitrary(2, 10);
  // console.log('x: ', x);
  // console.log('y: ', y);
  // console.log('z: ', z);
  // console.log('s: ', s);
  return keyframes`
    0% {
      opacity: 0;
      transform: translateX(${x}px) translateY(${y}px) translateZ(${z}px) scale(${s});
    }
    100% {
      opacity: 1;
      transform: translateX(0px) translateY(0px) translateZ(0px) scale(0.9);
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
  background: #00ffe1;
  border: 1px solid #999;
  left: ${(props) => `${props.pos[0]}%;`};
  top: ${(props) => `${props.pos[1]}%;`};
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    z-index: 1;
    transform: scale(1.3);
    box-shadow: 0 5px 30px rgba(0,0,0,0.3);
    transition: all 0.1s ease-in-out;
  }

  animation : ${props => transformAnimation()} ${props => props.delay}s ease-in-out;
`;

const Puzzle = ({
  positions,
  charIndex,
}) => {
  return (
    <PuzzleWrapper>
      {
        positions.map((pos, index) => (
          <PuzzleBox
            key={index}
            pos={pos}
            delay={(charIndex + 1) * 0.6 + 1}
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
