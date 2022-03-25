import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link, animateScroll as scroll } from 'react-scroll';

import logoImg from '../../assets/logo.svg';

const NavbarWelcome = () => {
  // "useState" for code snippet
  // inital state set to false so that when you load the page the menu is closed.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="/">
        <Img src={logoImg} alt="logo" />
      </Logo>
      {/* Here we setIsOpen to the opposite of false, this way when it is false it will set it to true and vice versa */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      {/* passing prop isOpen here */}
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/essentialinfo">Essential Info</MenuLink>
        <MenuLink href="/aboutus">About Us</MenuLink>
        <MenuLink href="/aboutproject">About This Project</MenuLink>
        <Button size="small" color="secondary" variant="outlined">
          <Link
            activeClass="active"
            to="name"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Sign In
          </Link>
        </Button>
      </Menu>
    </Nav>
  );
};

export default NavbarWelcome;

//--------- STYLED COMPONENTS ----------//
const Nav = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: white;

  @media (min-width: 768px) {
    padding: 0 3.5rem 0 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3.5rem 0 4.5rem;
  }
  @media (min-width: 1440px) {
    padding: 0 5rem 0 6.5rem;
  }
`;

const Img = styled.img`
  height: auto;
  width: 170px;

  @media (min-width: 768px) {
    height: auto;
    width: 170px;
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
    margin-bottom: 30px;
    // we set the height here to make the menu move up and down
    // if it is open the max height is 300px, if not it is 0px
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  font-family: 'Poppins', sans-serif;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ef737d;
  transition: all 0.3s ease-in;
  font-size: 0.8rem;

  &:hover {
    color: #e5e5e5;
  }
`;

const Logo = styled.a`
  padding: 1.8rem 0;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`;
