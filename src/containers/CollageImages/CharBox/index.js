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
  margin: 0px 5px;
  .char-box__char {
    color: #eee;
    animation: ${invisibleAnimation} 1s ease-in;
    animation-fill-mode: forwards; /* 保持動畫結束後的狀態 */
  }
`;

const CharBox = ({
  char,
  charIndex,
  isActive,
}) => {
  return (
    <CharBoxWrapper>
      <div className="char-box__char">{char}</div>
      <Puzzle
        positions={imagePositions[char]}
        charIndex={charIndex}
        isActive={isActive}
      />
    </CharBoxWrapper>
  );
};

CharBox.propTypes = {
  char: PropTypes.string,
  charIndex: PropTypes.number,
  isActive: PropTypes.bool,
};

CharBox.defaultProps = {
  char: '',
  charIndex: 0,
  isActive: false,
};

export default CharBox;
