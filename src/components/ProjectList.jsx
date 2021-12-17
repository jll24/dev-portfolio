import styled from "styled-components";
import Project from "./Project";
import { products } from "../data";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${mobile({ padding: "50px 0" })}
`;
const TextContainer = styled.div`
  width: 65%;
  ${mobile({ width: "80%", margin: "20px 0" })}
`;
const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;
  color: #ff6f00;
  ${mobile({ lineHeight: "50px" })}
`;
const Desc = styled.p`
  ${mobile({ marginTop: "20px" })}
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  ${mobile({ flexDirection: "column", alignItems: "center" })}
`;

const ProjectList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container className="projects">
      <TextContainer>
        <Title style={{ color: darkMode && "#00ccbb" }}>Think and Create</Title>
        <Desc>
          <q>
            <em>It’s not just about ideas. It’s about making ideas happen.</em>
          </q>
        </Desc>
      </TextContainer>
      <List>
        {products.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </List>
    </Container>
  );
};

export default ProjectList;
