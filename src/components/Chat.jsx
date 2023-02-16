/* eslint-disable default-case */
import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import {
  Button,
  IconButton,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
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
  ExpansionPanel,
} from "@chatscope/chat-ui-kit-react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import { FormContext } from "../App";
function Chat(props) {
  const [skill, setSkill] = useState("");
  const [index, setIndex] = useState(0);
  const [msgInputValue, setMsgInputValue] = useState("");
  const [messages, setMessages] = useState([{}]);
  const [viewMsg, setViewMsg] = useState([]);
  const [side, setSide] = useState(0);
  const { Answer } = useContext(FormContext);
  useEffect(() => {
    const tempArray = [];
    const answerArray = [];
    const getData = async () => {
      const response = await axios.get("http://localhost:8000/QuestionList");
      response.data.qlist.map((a, i) => {
        tempArray.push([
          { message: a.Question, direction: "incoming" },
          a.Answers,
        ]);
      });
      setMessages(tempArray);
    };
    getData();
  }, []);
  const updateChat = (answer) => {
    switch (answer) {
      case "Academics":
        Answer[index] = answer;
        setIndex(1);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        axios.post("http://localhost:8000/UpdateCounter", {
          Answer: "Academics",
          num: 1,
        });
        break;
      case "i Want to intergrate into working fields":
        Answer[index] = answer;
        setSide(1);
        setIndex(12);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        axios.post("http://localhost:8000/UpdateCounter", {
          Answer: "i Want to intergrate into working fields",
          num: 1,
        });
        break;
      case "I want to sign up for a course/service":
        setIndex(14);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "I need guidance/consulting":
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "English":
        Answer[index] = answer;
        setIndex(2);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Hebrew":
        Answer[index] = answer;
        setIndex(2);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "1":
        if (index === 2 && side === 0) {
          Answer[index] = answer;
          setIndex(3);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 2 && side === 1) {
          Answer[index] = answer;
          setIndex(3);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 4) {
          Answer[index] = answer;
          setIndex(5);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Hebrew",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        break;
      case "2":
        if (index === 2 && side === 0) {
          Answer[index] = answer;
          setIndex(3);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 2,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 2 && side === 1) {
          Answer[index] = answer;
          setIndex(3);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 4) {
          Answer[index] = answer;
          setIndex(5);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Hebrew",
            num: 2,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        break;
      case "3":
        if (index === 2 && side === 0) {
          Answer[index] = answer;
          setIndex(3);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 3,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 2 && side === 1) {
          Answer[index] = answer;
          setIndex(3);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 3,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 4) {
          Answer[index] = answer;
          setIndex(5);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Hebrew",
            num: 3,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        break;
      case "4":
        if (index === 2 && side === 0) {
          Answer[index] = answer;
          setIndex(4);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 4,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 2 && side === 1) {
          Answer[index] = answer;
          setIndex(9);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 4,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 4) {
          Answer[index] = answer;
          setIndex(6);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Hebrew",
            num: 4,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        break;
      case "5":
        if (index === 2 && side === 0) {
          Answer[index] = answer;
          setIndex(4);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 5,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 2 && side === 1) {
          Answer[index] = answer;
          setIndex(9);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English",
            num: 5,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 4) {
          Answer[index] = answer;
          setIndex(6);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Hebrew",
            num: 5,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        break;
      case "Submit skill/trade":
        Answer[index] = answer;
        setIndex(13);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Yes":
        if (index === 3 && side === 0) {
          Answer[index] = answer;
          setIndex(16);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English_Course",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 3 && side === 1) {
          Answer[index] = answer;
          setIndex(16);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "English_Course",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 5) {
          Answer[index] = answer;
          setIndex(16);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Hebrew_Course",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 6) {
          Answer[index] = answer;
          setIndex(9);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Have_GED",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 7) {
          Answer[index] = answer;
          setIndex(16);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "GED_Course",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 8) {
          Answer[index] = answer;
          setIndex(16);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Uni",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 9 && side === 0) {
          Answer[index] = answer;
          setIndex(11);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Computer_Skills",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 10 && side === 0) {
          Answer[index] = answer;
          setIndex(16);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Computer_Course",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 10 && side === 1) {
          Answer[index] = answer;
          setIndex(16);
          axios.post("http://localhost:8000/UpdateCounter", {
            Answer: "Computer_Course",
            num: 1,
          });
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 9 && side === 1) {
          Answer[index] = answer;
          setIndex(17);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 13 && side === 1) {
          Answer[index] = answer;
          setIndex(2);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        break;

      case "No":
        if (index === 3 && side === 0) {
          Answer[index] = answer;
          setIndex(4);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 3 && side === 1) {
          Answer[index] = answer;
          setIndex(9);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 5) {
          Answer[index] = answer;
          setIndex(6);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 6) {
          Answer[index] = answer;
          setIndex(7);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 7) {
          Answer[index] = answer;
          setIndex(8);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 8) {
          Answer[index] = answer;
          setIndex(9);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 9 && side === 0) {
          Answer[index] = answer;
          setIndex(10);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 9 && side === 1) {
          Answer[index] = answer;
          setIndex(10);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 10 && side === 0) {
          Answer[index] = answer;
          setIndex(11);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 10 && side === 1) {
          Answer[index] = answer;
          setIndex(18);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 12 && side === 1) {
          Answer[index] = answer;
          setIndex(13);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        if (index === 13 && side === 1) {
          Answer[index] = answer;
          setIndex(16);
          setViewMsg([
            ...viewMsg,
            messages[index][0],
            { message: answer, direction: "outgoing" },
          ]);
        }
        break;
      case "Web Design":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        window.open(
          "https://forms.monday.com/forms/4648f63d6a603732b82323c0d317db4a?r=use1",
          "_blank",
          "noreferrer"
        );
        break;
      case "Python & Data Analysis":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        window.open(
          "https://forms.monday.com/forms/107914c04d1bb696511e4406a381547a?r=use1",
          "_blank",
          "noreferrer"
        );
        break;
      case "UI/UX Design":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSeISFpM3VeUcfthmqT1X6J_8TtlAxKuZp6MRr_T0GYLLAsVDA/viewform",
          "_blank",
          "noreferrer"
        );
      case "Graphic Motion":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSeISFpM3VeUcfthmqT1X6J_8TtlAxKuZp6MRr_T0GYLLAsVDA/viewform",
          "_blank",
          "noreferrer"
        );
      case "Full Stack Development":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        // window.open("https://docs.google.com/forms/d/e/1FAIpQLSeISFpM3VeUcfthmqT1X6J_8TtlAxKuZp6MRr_T0GYLLAsVDA/viewform" ,'_blank', 'noreferrer')
        break;
      case "Front End Development":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        // window.open("https://docs.google.com/forms/d/e/1FAIpQLSeISFpM3VeUcfthmqT1X6J_8TtlAxKuZp6MRr_T0GYLLAsVDA/viewform" ,'_blank', 'noreferrer')
        break;
      case "Video Editing":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        // window.open("https://docs.google.com/forms/d/e/1FAIpQLSeISFpM3VeUcfthmqT1X6J_8TtlAxKuZp6MRr_T0GYLLAsVDA/viewform" ,'_blank', 'noreferrer')
        break;
      case "Adobe After Effects":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        // window.open("https://docs.google.com/forms/d/e/1FAIpQLSeISFpM3VeUcfthmqT1X6J_8TtlAxKuZp6MRr_T0GYLLAsVDA/viewform" ,'_blank', 'noreferrer')
        break;
      case "Career and academic guidance":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Job search and placement":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "CV writing workshops":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Job interview simulations":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Linkedin workshops":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Tutoring":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Business & Management":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Art & Design":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Computers & Technology":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Criminal Justice & Legal":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Education & Teaching":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Liberal Arts & Humanities":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Nursing & Healthcare":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Psychology & Counseling":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Science & Engineering":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
      case "Trades & Careers":
        Answer[index] = answer;
        setIndex(16);
        setViewMsg([
          ...viewMsg,
          messages[index][0],
          { message: answer, direction: "outgoing" },
        ]);
        break;
    }
  };
  console.log(Answer);
  const refresh = () => {
    window.location.reload();
  };
  const handleSend = (message) => {
    setMessages([
      ...messages,
      {
        message,
        direction: "incoming",
      },
    ]);
    setMsgInputValue("");
  };
  console.log(messages);
  console.log(Answer);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainContainer
        style={{
          width: "40vw",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatContainer>
          <ConversationHeader>
            <Avatar
              src="https://chatscope.io/storybook/react/static/media/eliot.d7038eac.svg"
              name={"Zoe"}
            />
            <ConversationHeader.Content userName="Tewelde" info="Active" />
            <ConversationHeader.Actions>
              <VoiceCallButton title="Start voice call" />
              <IconButton onClick={() => refresh()}>
                <RefreshIcon />
              </IconButton>
              {/* <InfoButton title="Show info" /> */}
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={<TypingIndicator content="Bot is thinking" />}
          >
            {
              <Message
                model={{
                  message: "hello I`m Tewelde, Your personal assistant. ",
                }}
              />
            }
            {viewMsg.map((a, i) => (
              <Message model={a} />
            ))}
            {<Message model={messages[index][0]} />}
          </MessageList>
          <Box
            as={MessageInput}
            style={{
              display: "flex",
              flexDirection: "row",
              borderTop: "1px solid #d1dbe4",
              overflow: "auto",
            }}
          >
            <ExpansionPanel
              style={{ width: "100%", height: "100%" }}
              title="Answers"
              isOpened={true}
            >
              {messages[index][1] &&
                messages[index][1].map((a) => (
                  <Box>
                    {index === 12 && a === "Submit skill/trade" && (
                      <TextField onChange={(e) => setSkill(e.target.value)} />
                    )}
                    <Button
                      sx={{
                        border: "1px solid teal",
                        borderRadius: "7px",
                        margin: "2px",
                      }}
                      onClick={() => updateChat(a)}
                    >
                      {a}
                    </Button>
                  </Box>
                ))}
            </ExpansionPanel>
          </Box>
        </ChatContainer>
      </MainContainer>
    </Box>
  );
}

export default Chat;
