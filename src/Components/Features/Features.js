import styled from "styled-components";

import React from "react";
import { Card, CardPara, CardsContainer, CardsHeading, CardsIcon, FeaturedDescrip, FeaturedPara, FeatureHeading,FeatureParaDiv, FeatureSection } from "./Features.styles";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineSync } from "react-icons/ai";
import { AiOutlineSafety } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";

export default function Features() {
return(
    <>
    <FeatureSection>
    <FeatureHeading>FEATURES</FeatureHeading>
    <FeatureParaDiv>
        <FeaturedPara>Your Experience Gets Better And Better Over Time.</FeaturedPara>
        <FeaturedDescrip>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br/> alteration in some form.</FeaturedDescrip>
    </FeatureParaDiv>
    <CardsContainer>
  <Card>
    <CardsIcon><AiOutlineCloudUpload /></CardsIcon>
    <CardsHeading>Push to Deploy</CardsHeading>
    <CardPara>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</CardPara>
  </Card>
  <Card>
    <CardsIcon><AiOutlineLock/></CardsIcon>
    <CardsHeading>SSL Certificates</CardsHeading>
    <CardPara>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</CardPara>
  </Card>
  <Card>
    <CardsIcon><AiOutlineSync /></CardsIcon>
    <CardsHeading>Simple Queues</CardsHeading>
    <CardPara>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</CardPara>
  </Card>
  <Card>
    <CardsIcon><AiOutlineSafety /></CardsIcon>
    <CardsHeading>Advanced Security</CardsHeading>
    <CardPara>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</CardPara>
  </Card>
   <Card>
    <CardsIcon><AiOutlineApi /></CardsIcon>
    <CardsHeading>Powerful API</CardsHeading>
    <CardPara>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</CardPara>
  </Card>
  <Card>
    <CardsIcon><AiOutlineDatabase /></CardsIcon>
    <CardsHeading>DataBase Backups</CardsHeading>
    <CardPara>It is a long established fact that a reader will be distracted by the readable content of a page at its layout.</CardPara>
  </Card>

</CardsContainer>

    
    </FeatureSection>
    </>
)
}