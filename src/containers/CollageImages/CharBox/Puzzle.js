import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const Puzzle = ({
  positions,
}) => {
  return (
    <PuzzleWrapper>
      {
        positions.map((pos, index) => (
          <PuzzleBox
            key={index}
            pos={pos}
          />
        ))
      }
    </PuzzleWrapper>
  );
};

Puzzle.propTypes = {
  positions: PropTypes.array,
  boxWidth: PropTypes.number,
};

Puzzle.defaultProps = {
  positions: [],
  boxWidth: 0,
};

export default Puzzle;
