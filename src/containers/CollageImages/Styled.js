import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  width: 90vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => 80 / props.text.length}vw;
  transition: all 1s ease-in-out;
`;

export const CollageImagesWrapper = styled.div`

`;