import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 30%;
  height: 45vh;
  margin: 20px 10px;
  border-radius: 15px;
  box-shadow: 15px 12px 16px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  position: relative;
  ${mobile({ width: "80%", height: "35vh" })};
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  padding-top: 150%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s;
  &&:hover {
    padding-top: 0;
    align-items: center;
    border-radius: 15px;
    backdrop-filter: blur(10px) brightness(0.5);
  }
`;
const Title = styled.h2`
  color: white;
`;
const Desc = styled.p`
  color: white;
  font-weight: 250;
  transform: scale(0.8);
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  border-radius: 15px;
  padding: 5px 15px;
  color: white;
  margin: 7px;
  transition: 0.3s;
  &&:hover {
    transform: scale(1.2);
  }
`;
const LinkImg = styled.img`
  width: 100%;
`;

const Project = ({ img, link, desc, title, source }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Link
          href={source}
          target="_blank"
          style={{ backgroundColor: darkMode ? "#00ccbb" : "#ff6f00" }}
        >
          GitHub
        </Link>
        <Link
          href={link}
          target="_blank"
          style={{ backgroundColor: darkMode ? "#00ccbb" : "#ff6f00" }}
        >
          Website
        </Link>
      </Content>
      <LinkImg src={img} />
    </Container>
  );
};

export default Project;
