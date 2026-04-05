import styled from "styled-components";

export const PricingSection = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
  }
`;

export const PriceHeading = styled.p`
  color: rgb(255, 107, 129);
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const PricingDiv = styled.div`
  width: 50%;
  height: auto;
  margin: auto;
  text-align: center;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const PricingPara = styled.p`
  font-size: 35px;
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const PricingDescrip = styled.p`
  color: gray;
  text-align: center;
  font-size: 15px;
  font-family: sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;



export const PricingCardsDiv = styled.div`
  width: 75%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;   /* Center cards instead of spreading them out */
  gap: 25px;                 /* Small, even spacing between all cards */

  @media (max-width: 1024px) {
    width: 85%;
    gap: 20px;
  }

  @media (max-width: 768px) {
    width: 90%;
    gap: 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;




export const PricingCards = styled.div`
  width: 330px;
  height: 400px;
  background: whitesmoke;
  padding: 30px 40px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 1024px) {
    width: 45%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 25px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 20px;
  }
`;

export const CardHeading = styled.p`
  font-size: 20px;
  color: black;
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CardPara = styled.p`
  color: gray;
  font-size: 14px;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const CardPrice = styled.p`
  font-size: 30px;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 50px;
  background: black;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin:auto;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  &:hover {
    background-color: rgb(255, 107, 129);
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 14px;
  }
`;

export const CardFooter = styled.div`
  h4 {
    font-size: 14px;
    color: #111;
    margin-bottom: 15px;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 14px;
  margin-bottom: 8px;

  svg {
    color: rgb(255, 107, 129);
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
