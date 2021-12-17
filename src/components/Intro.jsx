import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  height: 100vh;
  ${mobile({ flexDirection: "column" })}
`;
// Left Side
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const TextWrapper = styled.div`
  padding: 50px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
  })}
`;
const Name = styled.h2`
  font-size: 35px;
  font-weight: 500;
  line-height: 35px;
  ${mobile({ display: "none" })}
`;
const BigName = styled.h1`
  font-size: 75px;
  line-height: 75px;
  ${mobile({ marginBottom: "15px" })}
`;

const SkillsContainer = styled.div`
  height: 50px;
  overflow: hidden;
`;

//Animation
const move = keyframes`
25%{ transform: translateY(-50px); }
50%{ transform: translateY(-100px); }
75%{ transform: translateY(-150px); }
100%{ transform: translateY(-200px); }
`;

const SkillsWrapper = styled.div`
  height: 100%;
  animation-name: ${move};
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const Skill = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #ff6f00;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "center" })}
`;

const DescContainer = styled.p`
  width: 85%;
  font-size: 18px;
  ${mobile({ display: "none" })}
`;

// Right Side
const Right = styled.div`
  flex: 1;
  position: relative;
  ${mobile({ bottom: "73px" })}
`;
const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;
const Background = styled.div`
clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  background-color: #001f38 ;
  height: 100%;
  width: 100%
  position: absolute;
  top: 0;
  right: 0;
`;
const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <Left>
        <TextWrapper>
          <Name>Hello, my name is</Name>
          <BigName>Lester Lacson</BigName>
          <SkillsContainer>
            <SkillsWrapper>
              <Skill style={{ color: darkMode && "#00ccbb" }}>
                Web Developer
              </Skill>
              <Skill style={{ color: darkMode && "#00ccbb" }}>
                UI/UX Designer
              </Skill>
              <Skill style={{ color: darkMode && "#00ccbb" }}>
                Brand Designer
              </Skill>
              <Skill style={{ color: darkMode && "#00ccbb" }}>
                Graphic Designer
              </Skill>
              <Skill style={{ color: darkMode && "#00ccbb" }}>
                Team Leader
              </Skill>
            </SkillsWrapper>
          </SkillsContainer>
          <DescContainer style={{ color: darkMode && "#ababab" }}>
            I specialize in creating minimalistic, and stylish web designs while
            maintaining superb user experience.
          </DescContainer>
        </TextWrapper>
      </Left>
      <Right>
        <Background
          style={{ backgroundColor: darkMode && "#005a8f" }}
        ></Background>
        <ProfilePic
          src="https://res.cloudinary.com/jllacson/image/upload/v1639119617/sampleShop/pngaaa.com-3224372_uz8itj.png"
          alt=""
        />
      </Right>
    </Container>
  );
};

export default Intro;
