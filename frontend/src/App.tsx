import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import RegistrationForm from "./components/registrationForm";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <RegistrationForm />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  align-items: center;
  background-color: #689689;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export default App;
