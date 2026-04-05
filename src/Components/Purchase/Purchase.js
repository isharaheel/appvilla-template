import styled from "styled-components";

import React from "react";
import { PurchaseBtn, PurchaseDescrip, PurchaseDiv, PurchasePara } from "./Purchase.styles";

export default function Purchase() {
    return(
        <>
        <PurchaseDiv>
            <PurchasePara>
                You are using free Lite
Version of Appvilla
            </PurchasePara>
            <PurchaseDescrip>Please, purchase full version of the template to get all pages, features and commercial license.</PurchaseDescrip>
            <PurchaseBtn>Purchase Now</PurchaseBtn>
        </PurchaseDiv>
        
        
        </>
    )
}