import React from "react";
import styled, { css } from "styled-components";

const header = () => {
  return (
    <div>
      <Header_Title color="red">404 Not Found</Header_Title>
    </div>
  );
};

const Header_Title = styled.p`
  font-family: "Inconsolata";
  position: absolute;
  width: 180px;
  height: 25px;
  left: 77px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #333333;
  ${(props) =>
    props.color === "red" &&
    css`
      color: red;
    `}
`;

export default header;
