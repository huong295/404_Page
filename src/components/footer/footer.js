import React from "react";
import styled from "styled-components";
const footer = () => {
  return <Footer_Title>created by Huong Le - devChallenges.io</Footer_Title>;
};

const Footer_Title = styled.div`
  position: absolute;
  width: 287px;
  height: 17px;
  left: 577px;
  top: 680px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  color: #bdbdbd;
`;

export default footer;
