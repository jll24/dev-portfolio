import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  position: relative;
  padding-top: 50px;
  ${mobile({ paddingTop: "30px" })}
`;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    padding: "35px 0",
    alignItems: "unset",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 50px;
  width: 100%;
  text-align: "center";
  color: #ff6f00;
  margin-left: 120px;
  ${mobile({
    fontSize: "44px",
    lineHeight: "50px",
    marginBottom: "10px",
  })}
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;
const Item = styled.div`
  display: flex;
  margin: 50px 0;
  font-weight: 400;
  width: 50%;
  ${mobile({ margin: "5px 0", width: "100%" })}
`;

const Link = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  height: 50px;
  width: 50px;
  transition: 1s;
  &&:hover {
    transform: rotate(-45deg);
  }
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
  ${mobile({ marginTop: "5px" })}
`;
const TextInput = styled.input`
  width: 70%;
  height: 50px;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
  border-radius: 10px;
  ${mobile({ margin: "3px 0" })}
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
              <Link
                href="https://www.linkedin.com/in/jllacson/"
                target="_blank"
              >
                <Img
                  style={{
                    height: "53px",
                    width: "53px",
                    margin: "3px 8px 0 0",
                  }}
                  src="https://res.cloudinary.com/jllacson/image/upload/v1640686020/sampleShop/pngaaa.com-449868_vozzms.png"
                />
              </Link>
            </Item>
            <Item>
              <Link href="https://www.instagram.com/jl.lacson/" target="_blank">
                <Img
                  style={{
                    margin: "0 8px 0 0",
                  }}
                  src="https://res.cloudinary.com/jllacson/image/upload/v1640686020/sampleShop/pngaaa.com-6471265_qclmkv.png"
                />
              </Link>
            </Item>
            <Item>
              <Link
                href="https://join.skype.com/invite/vVivgG9r8BdN"
                target="_blank"
              >
                <Img
                  style={{
                    height: "58px",
                    width: "58px",
                  }}
                  src="https://res.cloudinary.com/jllacson/image/upload/v1640688453/sampleShop/pngaaa.com-2171439_iheag2.png"
                />
              </Link>
            </Item>
            <Item>
              <Link
                href="https://drive.google.com/file/d/1z6OWO4cS-qM2d7-NlU_GiHZFHfbkD3V-/view?usp=sharing"
                target="_blank"
              >
                <Img
                  style={{
                    height: "56px",
                    width: "58px",
                    margin: "2px 0 0 8px",
                    transform: "rotate(3deg)",
                  }}
                  src="https://res.cloudinary.com/jllacson/image/upload/v1640760931/sampleShop/resume-icon-png-19029_ahbmcz.png"
                />
              </Link>
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
              rows="4"
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
