import React from "react";
import styled from "styled-components";
import { ImagDiv1, TitleBtn, TitleBtn2, TitleBtns, TitleDescrip, TitleDiv, TitleImage, TitleInner, TitleInner2, TitlePara } from "./Title.styles";
import { AiOutlineApple } from "react-icons/ai";
import { PiGooglePlayLogoDuotone } from "react-icons/pi";

export default function Title() {
    return(
        <TitleDiv>
            <TitleInner>
                <TitlePara>A powerful app for your business.</TitlePara>
                <TitleDescrip>From open source to pro services, Piqes helps you to build, deploy, test, and monitor apps.</TitleDescrip>
                <TitleBtns>
                    <TitleBtn>
                    <AiOutlineApple />
                    App Store
                    </TitleBtn>
                   
                    <TitleBtn2>
                    <PiGooglePlayLogoDuotone />    
                    Google Play
                    </TitleBtn2>

                </TitleBtns>

            </TitleInner>
            
            <TitleInner2>
                <TitleImage src="./images/phone.png"></TitleImage>
            </TitleInner2>
        </TitleDiv>
    )
}