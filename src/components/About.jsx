import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    textAlign: "center",
    height: "140vh",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  ${mobile({ width: "100%", height: "20%" })}
`;
const Card = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "30vh", marginTop: "60px" })}
`;
const CardBg = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: #001f38;
  ${mobile({ display: "none" })}
`;
const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

// Right
const Right = styled.div`
  flex: 1;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const AboutTitle = styled.h2`
  font-size: 60px;
  color: #ff6f00;
  ${mobile({ fontSize: "45px" })}
`;
const AboutSub = styled.p`
  margin: 20px 0;
  font-weight: 400;
  font-size: 20px;
  ${mobile({ width: "67%", margin: "0" })}
`;
const AboutDesc = styled.p`
  width: 80%;
  font-size: 18px;
  margin: 20px 0;
`;
const Credential = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ flexDirection: "column" })}
`;

const ImgLink = styled.a``;

const CredentialImg = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 20px;
  border: 1px solid lightgray;
`;

const TextContainer = styled.div`
  width: 70%;
  ${mobile({ width: "100%" })}
`;
const TextTitle = styled.h4`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
`;
const Text = styled.p``;

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container className="about">
      <Left>
        <CardBg style={{ backgroundColor: darkMode && "#005a8f" }}></CardBg>
        <Card>
          <CardImg
            src="https://res.cloudinary.com/jllacson/image/upload/v1639195621/sampleShop/20211205_112122_hunsla.jpg"
            alt=""
          />
        </Card>
      </Left>
      <Right>
        <AboutTitle style={{ color: darkMode && "#00ccbb" }}>
          So, Who Am I?
        </AboutTitle>
        <AboutSub>
          A father, a husband, a provider, and a learner. All at once.
        </AboutSub>
        <AboutDesc style={{ color: darkMode && "#ababab" }}>
          <q>
            <em>
              My name is John Lester Lacson. I am a father to a 1-year-old
              beautiful girl. I love spending my free time with my family. I had
              to work at an early age and stop my studies due to financial
              concerns. My past experiences made me realize that the missing
              part to my goals and skillset is web development. Thankfully, I
              found Uplift Code Camp who give people like me a chance to shift
              paths for a brighter future.
            </em>
          </q>
        </AboutDesc>
        <Credential>
          <ImgLink href="https://www.upliftcodecamp.com/" target="_blank">
            <CredentialImg src="https://res.cloudinary.com/jllacson/image/upload/v1639463569/sampleShop/69604110_102313884481364_4717041849666109440_n_jetpye.png" />
          </ImgLink>
          <TextContainer>
            <TextTitle>Uplift Code Camp</TextTitle>
            <Text>Full Stack Web Development</Text>
            <Text>Jul - Dec 2021</Text>
          </TextContainer>
        </Credential>
      </Right>
    </Container>
  );
};

export default About;
