import { Container, Row } from "react-bootstrap";
import "./App.css";
import Main from "./components/Main";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container className="" fluid>
      <Row>
        <Sidebar className={"p-0"} />
        <Main />
        <Player />
      </Row>
    </Container>
  );
}

export default App;
