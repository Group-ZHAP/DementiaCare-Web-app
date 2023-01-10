import React from "react";
import styled from "styled-components";
import logo from "../Images/header_logo.png";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <div>
        <Nav>
          <Logo>
            <>
              <img src={logo} alt="logo" height={60}></img>
              <h1 style={{ marginLeft: "30px" }}>DimentiCare</h1>
            </>
          </Logo>
          <NavItem>
            <li style={{ marginRight: "80px" }}>
              <Link
                to="/About"
                style={{ color: "black", textDecoration: "none" }}
              >
                About Us
              </Link>
            </li>
            <li style={{ marginRight: "80px" }}>Contact-Us</li>
            <li style={{ marginRight: "80px" }}>Help</li>
          </NavItem>
          <Social>
            <ul style={{ display: "flex", justifyContent: "space-around" }}>
              <li style={{ marginRight: "20px", listStyle: "none" }}>
                <SocialIcon
                  network="twitter"
                  fgColor="#009A75"
                  bgColor="#ffff"
                />
              </li>
              <li style={{ marginRight: "20px", listStyle: "none" }}>
                <SocialIcon
                  network="facebook"
                  fgColor="#009A75"
                  bgColor="#ffff"
                />
              </li>
              <li style={{ marginRight: "20px", listStyle: "none" }}>
                <SocialIcon
                  network="instagram"
                  fgColor="#009A75"
                  bgColor="#ffff"
                />
              </li>
              <li style={{ listStyle: "none" }}>
                <SocialIcon
                  network="google"
                  fgColor="#009A75"
                  bgColor="#ffff"
                />
              </li>
            </ul>
          </Social>
        </Nav>
      </div>
    </>
  );
};

export default HeaderNav;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: Kelly Slab;
`;
const NavItem = styled.ul`
  display: flex;
  justify-content: space-around;
  font-family: Calibri;
  font-weight: 300;
  list-style: none;
  font-size: 25px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
