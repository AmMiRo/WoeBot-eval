import React from "react";
import styled from "styled-components";

interface Props {
  username: string;
}

function SuccessMessage(props: Props) {
  const { username } = props;

  const message = `User, ${username}, has been registered.`;

  return (
    <MessageWrapper>
      <Congrats>congratulations!</Congrats>
      <UserInfo>{message}</UserInfo>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div`
  align-items: center;
  color: White;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 150px;
`;

const Congrats = styled.h2`
  font-size: 32px;
`;

const UserInfo = styled.p`
  font-size: 24px;
  margin-top: 50px;
`;

export default SuccessMessage;
