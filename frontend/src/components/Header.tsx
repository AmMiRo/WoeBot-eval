import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>Try our our form!</HeaderText>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: #3e3e3e;
  display: flex;
  height: 100px;
  justify-content: center;
  width: 100%;
`;

const HeaderText = styled.h1`
  color: White;
  font-size: 32px;
`;

export default Header;
