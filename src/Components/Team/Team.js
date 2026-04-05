import styled from "styled-components";
import React from "react";
import { TeamDiv, TeamHeading, TeamPara, TeamRatePara, TeamRates, TeamRatesDiv, TeamRatesPara } from "./Team.styles";

export default function Team() {
    return(
        <>
        
        <TeamDiv>
        <TeamHeading>Trusted by developers from over 80 planets</TeamHeading> 
        <TeamPara>There are many variations of passages of Lorem Ipsum available, but the majority.</TeamPara>
        <TeamRatesDiv>
            <TeamRates>
                <TeamRatePara>100%</TeamRatePara>
                <TeamRatesPara>Satisfaction</TeamRatesPara>
            </TeamRates>
            <TeamRates>
                 <TeamRatePara>120K</TeamRatePara>
                <TeamRatesPara>Happy Users</TeamRatesPara>
            </TeamRates>
            <TeamRates>
                 <TeamRatePara>125K+</TeamRatePara>
                <TeamRatesPara>Downloads</TeamRatesPara>
            </TeamRates>

        </TeamRatesDiv>   
        </TeamDiv> 
        
        
        </>
    )
}