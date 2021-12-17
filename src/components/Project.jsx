import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  ${mobile({ width: "80%", height: "30vh" })}
`;
const Browser = styled.div`
  padding: 0 5px;
  height: 20px;
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 1;
  background-color: #999;
`;
const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin: 3px;
  background: white;
`;
const Link = styled.a`
  height: 100%;
  width: 100%;
`;
const LinkImg = styled.img`
  width: 100%;
  transition: all 10s ease;

  &&:hover {
    transform: translateY(-100%);
  }
`;

const Project = ({ img, link, desc }) => {
  return (
    <Container>
      <Browser>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </Browser>
      <Link href={link} target="_blank">
        <LinkImg src={img} />
      </Link>
    </Container>
  );
};

export default Project;
