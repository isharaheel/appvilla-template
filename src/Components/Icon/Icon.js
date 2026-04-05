import React from "react";
import { IconBox, ScrollLink, ScrollTopIcon } from "./Icon.styles";
// import { FaAngleUp } from "react-icons/fa";

export default function Icon() {
    return(
        <>
        <IconBox>
          <ScrollLink href="#home">
             <ScrollTopIcon />
          </ScrollLink>
        </IconBox>
        
        
        </>
    )
}