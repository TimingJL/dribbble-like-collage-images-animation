import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Puzzle from './Puzzle';

import { imagePositions } from './constants';

const invisibleAnimation = keyframes`
  0% {
    color: #eee;
  }
  100% {
    color: white;
    opacity: 0;
  }
`;

const CharBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .char-box__char {
    color: #eee;
    animation: ${invisibleAnimation} 1s ease-in;
    animation-fill-mode: forwards; /* 保持動畫結束後的狀態 */
  }
`;

const CharBox = ({
  char,
  charIndex,
}) => {
  return (
    <CharBoxWrapper>
      <div className="char-box__char">{char}</div>
      <Puzzle
        positions={imagePositions[char]}
        charIndex={charIndex}
      />
    </CharBoxWrapper>
  );
};

CharBox.propTypes = {
  char: PropTypes.string,
  charIndex: PropTypes.number,
};

CharBox.defaultProps = {
  char: '',
  charIndex: 0,
};

export default CharBox;
