import styled from "styled-components";
import React from "react";
import { DivIcons, Footer1, Footer2, Footer2Lie, Footer2Lies, FooterDescrip, FooterDiv, FooterImg, FooterLastPara, FooterLogo } from "./Footer.styles";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BsPinterest } from "react-icons/bs";

export default function Footer() {
    return(
        <>
        <FooterDiv>
        <Footer1>
            <FooterLogo>
            <FooterImg src="./images/white-logo.svg"></FooterImg>
            </FooterLogo>
            <FooterDescrip>Making the world a better place through constructing elegant hierarchies.</FooterDescrip>
            <DivIcons>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
                <FaYoutube />
                <BsPinterest />
            </DivIcons>
            <FooterLastPara>
                Designed and Developed by UIdeck.<br/>Distributed by ThemeWagon
            </FooterLastPara>
            </Footer1>
            <Footer2>
            <Footer2Lies>
            Solutions                
            </Footer2Lies> 
            <Footer2Lie>Marketing</Footer2Lie>
            <Footer2Lie>Analytics</Footer2Lie> 
            <Footer2Lie>Commerce</Footer2Lie> 
            <Footer2Lie>Insights</Footer2Lie> 
            <Footer2Lie>Promotion</Footer2Lie> 
            </Footer2>

            <Footer2>
            <Footer2Lies>
            Support                
            </Footer2Lies> 
            <Footer2Lie>Pricing</Footer2Lie>
            <Footer2Lie>Documentation</Footer2Lie> 
            <Footer2Lie>Guides</Footer2Lie> 
            <Footer2Lie>API Status</Footer2Lie> 
            <Footer2Lie>Live Support</Footer2Lie> 
            </Footer2>

            <Footer2>
            <Footer2Lies>
            Company                
            </Footer2Lies> 
            <Footer2Lie>About Us</Footer2Lie>
            <Footer2Lie>Our Blog</Footer2Lie> 
            <Footer2Lie>Jobs</Footer2Lie> 
            <Footer2Lie>Press</Footer2Lie> 
            <Footer2Lie>Contact Us</Footer2Lie> 
            </Footer2>

            <Footer2>
            <Footer2Lies>
            Legal                
            </Footer2Lies> 
            <Footer2Lie>Terms & Conditions</Footer2Lie>
            <Footer2Lie>Privacy Policy</Footer2Lie> 
            <Footer2Lie>Catering Services</Footer2Lie> 
            <Footer2Lie>Customer Relations</Footer2Lie> 
            <Footer2Lie>Innovations</Footer2Lie> 
            </Footer2>
        </FooterDiv>
        </>
    )
}