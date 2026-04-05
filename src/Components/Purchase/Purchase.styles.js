import styled from "styled-components";

export const PurchaseDiv = styled.div`
  width: 100%;
  height: 300px;
  background: rgb(255, 107, 129);
  margin-top: 90px;
  text-align: center;
  color: white;
  padding-top: 80px;

  @media (max-width: 1024px) {
    height: auto;
    padding: 70px 20px;
  }

  @media (max-width: 768px) {
    margin-top: 70px;
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    padding: 50px 10px;
  }
`;

export const PurchasePara = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const PurchaseDescrip = styled.p`
  color: #f0f0f0;
  font-family: sans-serif;
  font-size: 16px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const PurchaseBtn = styled.button`
  width: 8%;
  background: whitesmoke;
  color: rgb(255, 107, 129);
  text-align: center;
  height: 50px;
  border: none;
  border-radius: 7px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: black;
  }

  @media (max-width: 1200px) {
    width: 12%;
  }

  @media (max-width: 1024px) {
    width: 20%;
  }

  @media (max-width: 768px) {
    width: 35%;
  }

  @media (max-width: 480px) {
    width: 60%;
    height: 45px;
    font-size: 14px;
  }
`;
