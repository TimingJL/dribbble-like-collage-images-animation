import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Puzzle from './Puzzle';

import { imagePositions } from './constants';

const CharBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .char-box__char {
    opacity: 0.1;
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
