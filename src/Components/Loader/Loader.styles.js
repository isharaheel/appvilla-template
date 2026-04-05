import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: fixed;
  top:50%;
  left:50%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const InnerCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffb6c1; 
  box-shadow: 0 0 0 20px rgba(255, 182, 193, 0.3);
   @keyframes anime {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
  };
  animation: anime 1.5s linear infinite ;

`;