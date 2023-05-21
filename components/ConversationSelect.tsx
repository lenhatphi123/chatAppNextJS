import styled from "styled-components";
import { Conversation } from "../types";
import { getRecipientEmail } from "../utils/getRecipientEmail";
import { useRecipient } from "../hook/useRecipient";
import RecipientAvatar from "./RecipientAvatar";

const ConversationSelect = ({
  id,
  conversationUsers,
}: {
  id: string;
  conversationUsers: Conversation["user"];
}) => {
  const {recipient,recipientEmail} =  useRecipient(conversationUsers);
  return (
    <StyleContainer>
      <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail}/>
      <span>{recipientEmail}</span>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-all;
  :hover {
    background-color: #e9eaeb;
  }
`;
export default ConversationSelect;
