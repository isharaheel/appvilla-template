import styled from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  min-height: 50vh; 
  background: rgb(8, 24, 40);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 60px 40px;
  flex-wrap: wrap; 
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 30px;
    padding: 50px 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;
    padding: 40px 20px;
  }
`;

export const Footer1 = styled.div`
  width: 400px;
  color: white;

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 0 10px;
  }
`;

export const FooterLogo = styled.div`
  width: 200px;
  height: 45px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    margin: 0 auto 25px;
  }
`;

export const FooterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const FooterDescrip = styled.p`
  color: whitesmoke;
  line-height: 1.6;
  font-size: 15px;
`;

export const DivIcons = styled.div`
  width: 60%;
  display: flex;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }

  svg {
    cursor: pointer;
    transition: 0.3s;
  }

  svg:hover {
    transform: scale(1.2);
    color: rgb(255, 107, 129);
  }
`;

export const FooterLastPara = styled.p`
  color: whitesmoke;
  font-size: 14px;
  margin-top: 10px;
`;

export const Footer2 = styled.div`
  width: 220px;
  height: auto;
  padding: 20px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 10px;
    text-align: center;
  }
`;

export const Footer2Lies = styled.p`
  color: whitesmoke;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Footer2Lie = styled.p`
  color: whitesmoke;
  margin-top: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: rgb(255, 107, 129);
  }
`;
