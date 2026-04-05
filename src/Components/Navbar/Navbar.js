import React, { useEffect, useState } from "react";
import {  NavBox,  NavLogo,  Logo,  NavLies,  Lies,  NavIcons,  FacebookIcon,  InstaIcon,  EdinIcon,
  TwitterIcon,  ToggleButton,  MobileMenu,} from "./Navbar.styles";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [open, setOpen] = useState(false);
const [active, setActive] = useState("home");
const [scrolled ,setScrolled] = useState(false)
 useEffect(() => { window.onscroll = () => setScrolled(window.scrollY > 50); }, []);


  return (
    <>
      <NavBox scrolled={scrolled}>
        <NavLogo>
          <Logo
            src={scrolled ? "/images/logo.svg" : "/images/white-logo.svg"}
            alt="Logo"
          />
        </NavLogo>

        <NavLies>
         
          <a href="#home" style={{ textDecoration: "none" }}>
  <Lies
    scrolled={scrolled}
    active={active === "home"}
    onClick={() => setActive("home")}
  >
    Home
  </Lies>
</a>


          <a href="#features" style={{ textDecoration: "none" }}>
  <Lies
    scrolled={scrolled}
    active={active === "features"}
    onClick={() => setActive("features")}
  >
    Features
  </Lies>
</a>

         
          <a href="#pricing" style={{ textDecoration: "none" }}>
  <Lies
    scrolled={scrolled}
    active={active === "pricing"}
    onClick={() => setActive("pricing")}
  >
    Pricing
  </Lies>
</a>

          <Lies scrolled={scrolled}>Overview</Lies>
          <Lies scrolled={scrolled}>Team</Lies>
          <Lies scrolled={scrolled}>Blog</Lies>
          <Lies scrolled={scrolled}>Contact</Lies>
        </NavLies>

        <NavIcons>
          <FacebookIcon scrolled={scrolled} />
          <InstaIcon scrolled={scrolled} />
          <EdinIcon scrolled={scrolled} />
          <TwitterIcon scrolled={scrolled} />
        </NavIcons>

        <ToggleButton scrolled={scrolled} onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </ToggleButton>
      </NavBox>

      {open && (
        <MobileMenu scrolled={scrolled}>
          <a href="#home" style={{ textDecoration: "none" }}>
            <Lies scrolled={scrolled} style={{ color: scrolled ? "black" : "white" }}>
              Home
            </Lies>
          </a>
          <a href="#features" style={{ textDecoration: "none" }}>
            <Lies scrolled={scrolled} style={{ color: scrolled ? "black" : "white" }}>
              Features
            </Lies>
          </a>
          <Lies scrolled={scrolled}>Overview</Lies>
          <Lies scrolled={scrolled}>Team</Lies>
          <Lies scrolled={scrolled}>Blog</Lies>

          <a href="#pricing" style={{ textDecoration: "none" }}>
            <Lies scrolled={scrolled} style={{ color: scrolled ? "black" : "white" }}>
              Pricing
            </Lies>
          </a>
         
          <Lies scrolled={scrolled}>Contact</Lies>
        </MobileMenu>
      )}
    </>
  );
}
