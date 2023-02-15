import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Button, IconButton, Slider, TextField, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
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
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';
function Chat(props) {
  const [skill,setSkill]=useState('')
  const [index,setIndex]=useState(0)
  const [msgInputValue, setMsgInputValue] = useState("");
  const [messages, setMessages] = useState([{}]);
  const [viewMsg,setViewMsg]=useState([])
  useEffect(() => {
    const tempArray = []
    const answerArray= []
    const getData = async () => {
      const response = await axios.get("http://localhost:8000/QuestionList")
      response.data.qlist.map((a, i) => {
        tempArray.push([{ message: a.Question, direction: "incoming" },a.Answers])
      }
      )
      setMessages(tempArray)
    }
    getData()
  }, [])
  const updateChat = (answer)=>{
    switch(answer){
      case "Academics":
        setIndex(1)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
        break;
      case 'i Want to intergrate into working fields':
        setIndex(12)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
        break;
    case 'I want to sign up for a course/service':
      setIndex(14)
      setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      break
    case 'I need guidance/consulting':
      setIndex(16)
      setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      break
    case "English":
      setIndex(2)
      setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      break
    case "Hebrew":
      setIndex(2)
      setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      break
    case "1":
      if(index===2){
        setIndex(3)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      }
      break
    case "2":
      if(index===2){
        setIndex(3)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      }
      break
    case "3":
      if(index===2){
        setIndex(3)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      }
      break
    case '4':
      if(index===2){
        setIndex(4)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      }
      break
    case "5":
      if(index===2){
        setIndex(4)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      }
      break
    case "Yes":
      if(index===3){
        setIndex(16)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      }
      break
    case "No":
      if(index===3){
        setIndex(4)
        setViewMsg([...viewMsg,messages[index][0],{message:answer,direction:'outgoing'}])
      }
      break
    case "Web Design":
      window.open('https://forms.monday.com/forms/4648f63d6a603732b82323c0d317db4a?r=use1', '_blank', 'noreferrer')
      break
    case "Python & Data Analysis":
      window.open('https://forms.monday.com/forms/107914c04d1bb696511e4406a381547a?r=use1', '_blank', 'noreferrer')
      break
  }}
  const refresh = ()=>{
    window.location.reload()
  }
  const handleSend = message => {
    setMessages([...messages, {
      message,
      direction: 'incoming'
    }]);
    setMsgInputValue("");
  };
  console.log(messages)
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MainContainer style={{ width: '40vw', height: '70vh', display: 'flex', flexDirection: 'column' }}>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src="https://chatscope.io/storybook/react/static/media/eliot.d7038eac.svg" name={"Zoe"} />
            <ConversationHeader.Content userName="Tewelde" info="Active" />
            <ConversationHeader.Actions>
              <VoiceCallButton title="Start voice call" />
              <IconButton onClick={()=>refresh()}><RefreshIcon/></IconButton>
              {/* <InfoButton title="Show info" /> */}
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList scrollBehavior='smooth' typingIndicator={<TypingIndicator content="Bot is thinking" />}>
            {<Message model={{message:'hello I`m Tewelde, Your personal assistant. '}}/>}
            {viewMsg.map((a,i)=><Message model={a}/>)}
            {<Message model={messages[index][0]}/>}
          </MessageList>
          <Box as={MessageInput} style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #d1dbe4"
          }}>
            <ExpansionPanel style={{ width: '100%', height: '100%' }} title="Answers" isOpened={true}>
              {messages[index][1]&&messages[index][1].map(a=><Box>{(index===12&&a==="Submit skill/trade ")&&<TextField onChange={(e)=>setSkill(e.target.value)}/>}<Button sx={{border:'1px solid teal',borderRadius:'7px',margin:'2px'}} onClick={()=>updateChat(a)}>{a}</Button></Box>)}
            </ExpansionPanel>
          </Box>
        </ChatContainer>
      </MainContainer>

    </Box>
  );
}

export default Chat;