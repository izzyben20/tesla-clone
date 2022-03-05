import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { selectCars } from '../features/carSlice/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, SetBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  const navItems = ['Solar Roof', 'Solar Panels', 'Existing Inventory', 'Used Inventory', 'Trade-In', 'Test Drive', 'Powerwall', 'Commercial Energy', 'Utilities', 'Charging', 'Find Us', 'Support' ]

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="" />
      </Link>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <Link key={index} to="/">
              {car}
            </Link>
          ))}
      </Menu>
      <RightMenu>
        <Link to="/">Shop</Link>
        <Link to="/">Tesla Account</Link>
      </RightMenu>
      <CustomMenu onClick={() => SetBurgerStatus(true)} />
      <BurgerNav show={burgerStatus}>
        <CustomBtnWrap>
          <CustomCloseBtn onClick={() => SetBurgerStatus(false)} />
        </CustomBtnWrap>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <Link href="/">{car}</Link>
            </li>
          ))}
        {navItems.map((item, index) => (
          <li key={index}>
          <a href="/">{item}</a>
        </li>
        ))}
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 5rem;
  padding: 0 2rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    color: #000;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1rem;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    color: #000;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 1rem;
  }
`;

const CustomMenu = styled(FaBars)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 40%;
  z-index: 20;
  list-style: none;
  padding: 1rem;
  text-decoration: none;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;

  @media (max-width: 768px) {
    width: 50%;
  }

  li {
    display: block;
    padding-top: 1.2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      padding-top: 0.8rem;
    }

    a {
      font-weight: 500;
      color: #000;
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
`;

const CustomCloseBtn = styled(FaTimes)`
  cursor: pointer;
  font-size: 2rem;
`;

const CustomBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
