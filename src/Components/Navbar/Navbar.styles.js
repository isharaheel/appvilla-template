import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

export const NavBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
  transition: all 0.4s ease;
  background-color: ${({ scrolled }) =>
    scrolled ? "whitesmoke" : "rgb(255,107,129)"};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 4px 12px rgba(0,0,0,0.3)" : "none"};
  // color: ${({ scrolled }) => (scrolled ? "black" : "green")};
  z-index: 1000;

  @media (max-width: 1400px) {
    padding: 0 100px;
  }

  @media (max-width: 1200px) {
    padding: 0 70px;
  }

  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 900px) {
    padding: 0 30px;
  }
`;

export const NavLogo = styled.div`
  width: 20%;
  height: 80px;
  text-align: center;

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 900px) {
    width: 40%;
    text-align: left;
  }
`;

export const Logo = styled.img`
  width: 50%;
  height: 100%;
  transition: all 0.4s ease;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const NavLies = styled.div`
  width: 45%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 1024px) {
    width: 55%;
  }

  @media (max-width: 900px) {
    display: none; 
  }
`;

export const Lies = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
   color: ${({ active, scrolled }) =>
  active ? "gray" : scrolled ? "black" : "white"};

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ scrolled }) => (scrolled ? "#555" : "#ddd")};
  };
  
  &.active {
    background-color: #007bff;
    color: white;
  };
    

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const NavIcons = styled.div`
  width: 10%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    width: 13%;
  }

  @media (max-width: 1024px) {
    width: 15%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const iconStyle = `
  font-size: 22px;
  transition: 0.3s;
  cursor: pointer;
`;

export const FacebookIcon = styled(BsFacebook)`
  ${iconStyle};
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
`;
export const InstaIcon = styled(FaInstagramSquare)`
  ${iconStyle};
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
`;
export const EdinIcon = styled(FaLinkedin)`
  ${iconStyle};
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
`;
export const TwitterIcon = styled(FaSquareTwitter)`
  ${iconStyle};
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
`;

export const ToggleButton = styled.div`
  display: none;
  font-size: 25px;
  color: ${({ scrolled }) => (scrolled ? "black" : "white")};
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  background: ${({ scrolled }) =>
    scrolled ? "whitesmoke" : "rgb(255,107,129)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  z-index: 999;
`;

