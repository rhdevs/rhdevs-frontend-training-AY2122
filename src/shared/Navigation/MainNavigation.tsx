import React from "react";

import styled from "styled-components";
import NavLinks from "./NavLinks";
import FEWebTitle from "../../components/FEWebTitle";

const MainHeader = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #475056;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 0 1rem;
  z-index: 5;
`;

const MainNavigation = () => {
  return (
    <>
      <MainHeader>
        <FEWebTitle />
        <nav>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
