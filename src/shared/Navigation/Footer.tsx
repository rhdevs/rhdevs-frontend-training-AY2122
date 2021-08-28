import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import FEWebTitle from "../../components/FEWebTitle";

const MainFooter = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #475056;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 3rem 1rem 4rem 1rem;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
`;

const Styledhr = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 1px;
`;

const Footer = () => {
  return (
    <MainFooter>
      <LinksContainer>
        <StyledNavLink
          to={{ pathname: "https://www.rhapp.lol" }}
          target="_blank"
        >
          RHapp
        </StyledNavLink>
        <StyledNavLink
          to={{
            pathname:
              "https://github.com/rhdevs/rhdevs-frontend-training-AY2122",
          }}
          target="_blank"
        >
          Github
        </StyledNavLink>
        <StyledNavLink
          to={{ pathname: "https://www.instagram.com/rhdevs/" }}
          target="_blank"
        >
          Instagram
        </StyledNavLink>
        <FEWebTitle imgSize="1.5rem" fontSize="17px" />
        <StyledNavLink
          to={{ pathname: "https://t.me/fanghuihui" }}
          target="_blank"
        >
          Help desk
        </StyledNavLink>
        <StyledNavLink
          to={{ pathname: "https://rhdevs.github.io/landing-page/" }}
          target="_blank"
        >
          Blog
        </StyledNavLink>
        <StyledNavLink
          to={{
            pathname: "https://tinyurl.com/frontend-learning",
          }}
          target="_blank"
        >
          Resources
        </StyledNavLink>
      </LinksContainer>
      <Styledhr />
    </MainFooter>
  );
};

export default Footer;
