import React, { useEffect } from "react";

import styled from "styled-components";
import frontend_webdev from "../../assets/frontend_webdev.svg";

const FEImg = styled.img`
  width: 100%;
  height: auto;
`;

const MembersSection = styled.div`
  margin: 1.5rem 1rem;
`;

const MembersSectionHeader = styled.h1`
  text-align: center;
  font-weight: 400;
`;

const InformationCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: (auto-fill, 1fr);
  grid-gap: 1rem;
`;

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FEImg src={frontend_webdev} alt="frontend web development" />
      <MembersSection>
        <MembersSectionHeader>You're in good company</MembersSectionHeader>
        <InformationCardSection>
          <img
            style={{ width: "100%" }}
            src={frontend_webdev}
            alt="frontend web development"
          />
          <img
            style={{ width: "100%" }}
            src={frontend_webdev}
            alt="frontend web development"
          />
          <img
            style={{ width: "100%" }}
            src={frontend_webdev}
            alt="frontend web development"
          />
          <img
            style={{ width: "100%" }}
            src={frontend_webdev}
            alt="frontend web development"
          />
        </InformationCardSection>
      </MembersSection>
    </>
  );
};

export default LandingPage;
