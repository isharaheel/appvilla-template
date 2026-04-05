import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";


export const IconBox = styled.div`
width: 50px;
height:50px;
text-align:center;
background:rgb(255,107,129);
color:white;
position:fixed;
top:90%;
right:30px;
border-radius:3px;
padding-top:12px;
font-size:20px

`
export const ScrollTopIcon = styled(FaAngleUp)`

  font-size: 20px;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: black;
  }
`;

export const ScrollLink = styled.a`

  text-decoration: none;
`;