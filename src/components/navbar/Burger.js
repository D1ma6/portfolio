import React, { useState } from "react";
import styled from "styled-components";

// nav
import Nav from "./Nav";

const StyledBurger = styled.div`
  width: 24px;
  height: 18px;

  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  display: none;
  margin: 0;
  top: 37px;
  right: 3vh;

  @media only screen and (max-width: 890px) {
    display: flex;
  }

  &:hover {
    cursor: pointer;
  }

  span {
    width: 100%;
    height: 3px;
    border-radius: 3px;

    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    background: ${({ open }) => (open ? "#C36643" : "#569cd6")};
    transform-origin: 1px;

    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(41.5deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-41.5deg)" : "rotate(0deg)")};
    }
  }
`;

function Burger(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <Nav open={open} />
    </div>
  );
}

export default Burger;
