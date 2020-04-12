import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import CollageImages from './CollageImages';
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

const Wrapper = styled.div`
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

const Character = memo(({
  element,
  elementIndex,
  isActive,
  color,
}) => (
  <Wrapper>
    <div className="char-box__char">{element}</div>
    <CollageImages
      positions={imagePositions[element]}
      elementIndex={elementIndex}
      isActive={isActive}
      color={color}
    />
  </Wrapper>
));

Character.propTypes = {
  element: PropTypes.string,
  elementIndex: PropTypes.number,
  isActive: PropTypes.bool,
  color: PropTypes.string,
};

Character.defaultProps = {
  element: '',
  elementIndex: 0,
  isActive: false,
  color: '',
};

export default Character;
