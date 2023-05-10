import React from "react";
import styled from "styled-components";
import Image from "next/image";
import WhatsAppLogo from "../assets/whatsapplogo.png";
import { CircularProgress } from "@mui/material";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const StyleImageWrapper = styled.div`
  margin-bottom: 50px;
`;

const Loading = () => {
  return (
    <StyledContainer>
      <StyleImageWrapper>
        <Image src={WhatsAppLogo} alt="WhatsAppLogo" width={200} height={200} />
      </StyleImageWrapper>
      <CircularProgress />
    </StyledContainer>
  );
};

export default Loading;
