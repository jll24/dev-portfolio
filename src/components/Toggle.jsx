import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";
const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9;
  background-color: white;
  width: 70px;
  height: 35px;
  border-radius: 20px;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Sun = styled.img`
  width: 23px;
  height: 23px;
`;
const Moon = styled.img`
  width: 20px;
  height: 20px;
`;
const Button = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #999;
  position: absolute;
  cursor: pointer;
`;
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <Container>
      <Sun src="https://res.cloudinary.com/jllacson/image/upload/v1639376712/sampleShop/pngaaa.com-1991986_ibferk.png" />
      <Moon src="https://res.cloudinary.com/jllacson/image/upload/v1639383622/sampleShop/pngaaa.com-2925369_zzktiz.png" />
      <Button
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 35 }}
      ></Button>
    </Container>
  );
};

export default Toggle;
