import styled from "styled-components";

export const TeamDiv = styled.div`
  width: 100%;
  height: 320px;
  background-color: rgb(255, 107, 129);
  text-align: center;
  margin-top: 150px;
  color: white;
  padding-top: 70px;

  @media (max-width: 1024px) {
    height: auto;
    padding: 60px 20px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 50px 15px;
  }

  @media (max-width: 480px) {
    margin-top: 80px;
    padding: 40px 10px;
  }
`;

export const TeamHeading = styled.p`
  font-size: 35px;
  font-family: sans-serif;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const TeamPara = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  margin-top: 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const TeamRatesDiv = styled.div`
  width: 40%;
  height: 100px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
    flex-wrap: wrap;
    height: auto;
    gap: 20px;
  }

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    gap: 15px;
  }
`;

export const TeamRates = styled.div`
  width: 160px;
  height: 100%;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 140px;
  }

  @media (max-width: 768px) {
    width: 45%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TeamRatePara = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const TeamRatesPara = styled.p`
  color: white;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
