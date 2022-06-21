import React from "react";
import styled from "styled-components";
const body = () => {
  return (
    <BodyContainer>
      <ScarecrowImg src="/Scarecrow.png" />
      <BodyContent>
        <BodyContent_Header>I have bad news for you</BodyContent_Header>
        <BodyContent_Detail>
          The page you are looking for might be removed or is temporarily
          unavailable
        </BodyContent_Detail>
        <BodyContent_Button>Back To Homepage</BodyContent_Button>
      </BodyContent>
    </BodyContainer>
  );
};
const BodyContainer = styled.div`
  display: flex;
`;

const ScarecrowImg = styled.img`
  position: absolute;
  left: 5.35%;
  right: 57.21%;
  top: 24.54%;
  bottom: 34.03%;
  width: 539.22px;
  height: 447.43px;
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const BodyContent_Header = styled.p`
  position: absolute;
  width: 586px;
  height: 190px;
  left: 735px;
  top: 100px;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: -0.035em;
  color: #333333;
`;

const BodyContent_Detail = styled.p`
  position: absolute;
  width: 381px;
  height: 108px;
  left: 736px;
  top: 360px;

  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;

  color: #4f4f4f;
`;

const BodyContent_Button = styled.button`
  position: absolute;
  width: 216px;
  height: 68px;
  left: 740px;
  top: 500px;
  background: #333333;
  color: white;
`;

export default body;
