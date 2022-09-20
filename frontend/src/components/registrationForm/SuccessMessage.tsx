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

const MessageWrapper = styled.div``;

const Congrats = styled.h2``;

const UserInfo = styled.p``;

export default SuccessMessage;
