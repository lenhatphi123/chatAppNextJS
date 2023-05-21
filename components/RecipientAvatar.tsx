import React from "react";
import { useRecipient } from "../hook/useRecipient";
import { Avatar } from "@mui/material";
import styled from "styled-components";

type props = ReturnType<typeof useRecipient>;
const StyleAvatar = styled(Avatar)`
  margin: 5px 15px 5px 5px;
`;
function RecipientAvatar({ recipient, recipientEmail }: props) {
  return recipient?.photoUrl ? (
    <StyleAvatar src={recipient.photoUrl} />
  ) : (
    <StyleAvatar>{recipientEmail && recipientEmail[0].toUpperCase()}</StyleAvatar>
  );
}

export default RecipientAvatar;

//2:09