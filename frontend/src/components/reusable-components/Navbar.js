import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import logoImg from "../../assets/logo.svg";

const Navbar = () => {
  // "useState" for code snippet
  // inital state set to false so that when you load the page the menu is closed.
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const onHomePageRedirect = () => {
    navigate.push("/dashboard");
  };

  return (
    <Nav>
      <Logo href="">
        <Img src={logoImg} alt="logo" />
        {/* Debug <span>Task Manager</span> */}
      </Logo>
      {/* Here we setIsOpen to the opposite of false, this way when it is false it will set it to true and vice versa */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      {/* passing prop isOpen here */}
      <Menu isOpen={isOpen}>
        <MenuLink href="/dashboard">Home</MenuLink>
        <MenuLink href="/profile">Profile</MenuLink>
        <MenuLink href="/Essentials">Essentials</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Img = styled.img`
  height: 50px;
  width: 170px;

  @media (min-width: 768px) {
    height: 70px;
    width: 250px;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #ef737d;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    // we set the height here to make the menu move up and down
    // if it is open the max height is 300px, if not it is 0px
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  font-family: "Poppins", sans-serif;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ef737d;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #e5e5e5;
  }
`;

const MenuLinks = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ef737d;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #e5e5e5;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export default Navbar;
