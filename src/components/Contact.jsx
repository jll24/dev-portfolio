import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: "50px 0",
  })}
`;
const Left = styled.div`
  flex: 1;
  ${mobile({ display: "flex", flexDirection: "column", alignItems: "center" })}
`;
const Title = styled.h2`
  font-size: 60px;
  width: 80%;
  color: #ff6f00;
  ${mobile({
    fontSize: "44px",
    textAlign: "center",
    lineHeight: "50px",
    marginBottom: "20px",
  })}
`;
const InfoContainer = styled.div``;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  font-weight: 400;
  width: 70%;
  ${mobile({ margin: "5px 0" })}
`;

//Right Side
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Desc = styled.p`
  font-weight: 300;
  text-align: center;
  ${mobile({ display: "none" })}
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const TextInput = styled.input`
  width: 70%;
  height: 50px;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
  border-radius: 10px;
  ${mobile({ margin: "5px 0" })}
`;

const MsgContainer = styled.textarea`
  width: 70%;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
  resize: none;
`;
const SubmitBtn = styled.button`
  border: none;
  padding: 15px;
  background-color: #001f38;
  color: white;
  cursor: pointer;
  font-weight: 500;
  width: 70%;
  border-radius: 5px;
  font-size: 20px;
`;
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5pec7qs",
        "template_h7hi987",
        formRef.current,
        "user_oeI5t6KhvZuS2pr5nat0c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container className="contacts">
      <Wrapper>
        <Left>
          <Title style={{ color: darkMode && "#00ccbb" }}>
            Let's Work Together!
          </Title>
          <InfoContainer>
            <Item>
              <EmailIcon
                style={{ margin: "0 20px 0 0", color: darkMode && "#ababab" }}
              />
              iamjohnlacson@gmail.com
            </Item>
            <Item>
              <PhoneIcon
                style={{ margin: "0 20px 0 0", color: darkMode && "#ababab" }}
              />
              +63 935 505 1679
            </Item>
            <Item>
              <LinkedInIcon
                style={{ margin: "0 20px 0 0", color: darkMode && "#ababab" }}
              />
              /jllacson
            </Item>
          </InfoContainer>
        </Left>
        <Right>
          <Desc>
            <b>Get in touch.</b>
            <br /> Always open to exciting opportunities.
          </Desc>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <TextInput
              style={{ backgroundColor: darkMode && "#c2c2c2" }}
              type="text"
              placeholder="Enter name..."
              name="user_name"
            />
            <TextInput
              style={{ backgroundColor: darkMode && "#c2c2c2" }}
              type="text"
              placeholder="Enter email subject..."
              name="user_subject"
            />
            <TextInput
              style={{ backgroundColor: darkMode && "#c2c2c2" }}
              type="email"
              placeholder="Enter email..."
              name="user_email"
            />
            <MsgContainer
              rows="5"
              placeholder="Enter message..."
              name="message"
            />
            <SubmitBtn style={{ backgroundColor: darkMode && "#005a8f" }}>
              SEND EMAIL
            </SubmitBtn>
            {done && (
              <Alert
                severity="success"
                style={{
                  width: "60%",
                  marginTop: "5px",
                }}
              >
                <strong>Email sent!</strong> You will receive a response within
                24 hours.
              </Alert>
            )}
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;
