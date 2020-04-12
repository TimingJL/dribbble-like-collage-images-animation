import styled from 'styled-components';

export const Message = styled.div`
  transform: translateY(50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 760px) {
    transform: translateY(0px);
  }
  .message__title {
    font-size: 2rem;
    color: #333;
    @media screen and (max-width: 760px) {
      font-size: 1.5rem;
    }
  }
  .message__content {
    margin: 1rem auto;
    line-height: 1.3;
    color: #0006;
    font-weight: 400;
    max-width: 416px;
    text-align: center;
  }
`;

export const CollagesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => 90 / props.size}vw;
  transition: all 1s ease-in-out;
`;

export const OperatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RepeatAnimation = styled.button`
  transform: translateY(20px);
  text-align: center;
  border-radius: 50px;
  width: 280px;
  height: 31px;
  font-size: 0.875rem;
  background-color: #f1f3f4;
  color: #0006;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: #e3e7e9;
    box-shadow: 0 0.4em 1em rgba(0,0,0,0.05);
    transition: all 0.1s ease-in-out;
  }
`;
