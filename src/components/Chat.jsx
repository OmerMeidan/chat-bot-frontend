import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import {  Button, IconButton, Slider, TextField, Typography } from '@mui/material';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar,
  ConversationHeader,
  InfoButton,
  VoiceCallButton,
  VideoCallButton,
  StarButton,
  ExpansionPanel

} from "@chatscope/chat-ui-kit-react";

import SendIcon from '@mui/icons-material/Send';
function Chat(props) {
    const [msgInputValue, setMsgInputValue] = useState("");
    const [messages, setMessages] = useState([{message:"witch service would you like?",direction:'incoming'}]);

  const handleSend = message => {
    setMessages([...messages, {
      message,
      direction:'incoming'
    }]);
    setMsgInputValue("");
  };
  console.log(messages)
    return (
        <Box sx={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <MainContainer style={{width:'40vw',height:'70vh',display:'flex',flexDirection:'column'}}>
          <ChatContainer>
            <ConversationHeader>
                <Avatar src="https://chatscope.io/storybook/react/static/media/eliot.d7038eac.svg" name={"Zoe"}/>
                <ConversationHeader.Content userName="Tewelde" info="Active" />                                   
                <ConversationHeader.Actions>                                                                             
                    <StarButton title="Add to favourites" />
                    <VoiceCallButton title="Start voice call" />
                    <VideoCallButton title="Start video call" />
                    <InfoButton title="Show info" />
                </ConversationHeader.Actions>

            </ConversationHeader>
                <MessageList scrollBehavior='smooth' typingIndicator={<TypingIndicator content="Bot is thinking" />}>
                {messages.map((m, i) => <Message key={i} model={m}/>)}
                </MessageList>
                <Box as={MessageInput} style={{
                      display: "flex",
                      flexDirection: "row",
                      borderTop: "1px solid #d1dbe4"
                    }}> 
                    <ExpansionPanel style={{width:'100%',height:'100%'}} title="Answers" isOpened={true}>
                      <Button onClick={()=>setMessages([...messages,{message:'service 1',direction:'outgoing'},{message:"how r you?",direction:'incoming'}])}>service 1</Button>
                      <Button>service 2</Button>
                      <Button>service 3</Button>
                      <Button>service 4</Button>
                      <Button>service 5</Button>
                    </ExpansionPanel>
                </Box>
                {/* <MessageInput onSend={handleSend} value={msgInputValue} onChange={setMsgInputValue}/> */}
            </ChatContainer>
        </MainContainer>
       
        </Box>
    );
}

export default Chat;