import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  /* width: 90vw; */
  /* height: 80vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => 90 / props.text.length}vw;
  transition: all 1s ease-in-out;
`;

export const CollageImagesWrapper = styled.div`

`;

export const OperatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
