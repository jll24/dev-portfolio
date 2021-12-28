import { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";
import styled from "styled-components";
import { Link } from "react-scroll";
import { mobile } from "./responsive";

// Nav Icons
import PersonIcon from "@mui/icons-material/Person";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import PhoneIcon from "@mui/icons-material/Phone";

const NavBar = styled.div`
  height: 60px;
  width: 40%;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 9;
  border-radius: 0 0 55px 0;
  left: -3px;
  top: -2px;
  ${mobile({
    height: "75px",
    top: "91vh",
    width: "104%",
    borderRadius: "initial",
  })};
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  ${mobile({ padding: "0 10px", alignItems: "center" })}
`;
const ListItem = styled.li`
  list-style-type: none;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#001f38" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <NavBar
        style={{
          backgroundColor: darkMode ? "#001f38" : "white",
          color: darkMode ? "#00ccbb" : "#ff6f00",
          border: darkMode ? "2px solid #005a8f" : "2px solid lightgray",
        }}
      >
        <NavList>
          <ListItem>
            <Link to="about" spy={true} smooth={true}>
              <PersonIcon style={{ fontSize: "40px", cursor: "pointer" }} />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="projects" spy={true} smooth={true}>
              <IntegrationInstructionsIcon
                style={{ fontSize: "40px", cursor: "pointer" }}
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="contacts" spy={true} smooth={true}>
              <PhoneIcon style={{ fontSize: "40px", cursor: "pointer" }} />
            </Link>
          </ListItem>
        </NavList>
      </NavBar>
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App;
