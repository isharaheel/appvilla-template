import styled from "styled-components";
import React from "react";
import { BuyButton, CardHeading, CardPara, CardPrice, PriceHeading, PricingCards, PricingCardsDiv, PricingDescrip, PricingDiv, PricingPara, PricingSection,CardFooter,
  FeatureList,
  FeatureItem, } from "./Pricing.styles";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Pricing() {
    return(
        <>
        <PricingSection>
            <PriceHeading>PRICING</PriceHeading>
            <PricingDiv>
                <PricingPara>Pricing Plan</PricingPara>
                <PricingDescrip>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br/> alteration in some form.</PricingDescrip>
            </PricingDiv>
               <PricingCardsDiv>
                    <PricingCards>
                        <CardHeading>Hobby</CardHeading>
                        <CardPara>All the basics for starting a new business</CardPara>
                        <CardPrice>$12 <span style={{color:'gray',fontSize:'15px'}}>/mo</span></CardPrice>
                        <BuyButton>Buy Hobby</BuyButton>



                        <CardFooter>
            <h4>WHAT’S INCLUDED</h4>
            <FeatureList>
              <FeatureItem><AiOutlineCheckCircle /> Cras justo odio.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Dapibus ac facilisis in.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Morbi leo risus.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Potenti felis, in cras ligula.</FeatureItem>
            </FeatureList>
          </CardFooter>
                    </PricingCards>
                    <PricingCards>
                        <CardHeading>Freelancer</CardHeading>
                        <CardPara>All the basics for starting a new business</CardPara>
                        <CardPrice>$24 <span style={{color:'gray',fontSize:'15px'}}>/mo</span></CardPrice>
                        <BuyButton>Buy Freelancing</BuyButton>



                        <CardFooter>
            <h4>WHAT’S INCLUDED</h4>
            <FeatureList>
              <FeatureItem><AiOutlineCheckCircle /> Cras justo odio.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Dapibus ac facilisis in.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Morbi leo risus.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Potenti felis, in cras ligula.</FeatureItem>
            </FeatureList>
          </CardFooter>
                    </PricingCards>
                    <PricingCards>
                        <CardHeading>StartUp</CardHeading>
                        <CardPara>All the basics for starting a new business</CardPara>
                        <CardPrice>$32 <span style={{color:'gray',fontSize:'15px'}}>/mo</span></CardPrice>
                        <BuyButton>Buy StartUp</BuyButton>



                        <CardFooter>
            <h4>WHAT’S INCLUDED</h4>
            <FeatureList>
              <FeatureItem><AiOutlineCheckCircle /> Cras justo odio.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Dapibus ac facilisis in.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Morbi leo risus.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Potenti felis, in cras ligula.</FeatureItem>
            </FeatureList>
          </CardFooter>
                    </PricingCards>
                    <PricingCards>
                        <CardHeading>Interprise</CardHeading>
                        <CardPara>All the basics for starting a new business</CardPara>
                        <CardPrice>$48 <span style={{color:'gray',fontSize:'15px'}}>/mo</span></CardPrice>
                        <BuyButton>Buy Interprise</BuyButton>



                        <CardFooter>
            <h4>WHAT’S INCLUDED</h4>
            <FeatureList>
              <FeatureItem><AiOutlineCheckCircle /> Cras justo odio.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Dapibus ac facilisis in.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Morbi leo risus.</FeatureItem>
              <FeatureItem><AiOutlineCheckCircle /> Potenti felis, in cras ligula.</FeatureItem>
            </FeatureList>
          </CardFooter>
                    </PricingCards>

                </PricingCardsDiv>
            {/*  */}



            {/*  */}
        </PricingSection>
        </>
    )
}