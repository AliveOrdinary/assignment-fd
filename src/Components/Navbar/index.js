import React from "react";
import { styled } from "styled-components";

function Navbar({ getUsers }) {
  const handleClick = () => {
    getUsers();
  };

  return (
    <StyledNavbar>
      <h1>AirData</h1>
      <StyledButton onClick={handleClick}>Get Users</StyledButton>
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #090b13;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 4rem;
  height: 3rem;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 580px) {
    padding: 0.5rem 2rem;
  }
`;

const StyledButton = styled.button`
  background-color: #4a4bac;
  color: #f4f4f4;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #5c5cc4;
    color: #f5f5f5;
  }
`;
