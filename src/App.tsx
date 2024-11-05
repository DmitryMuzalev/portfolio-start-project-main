import "./App.css";
import styled from "styled-components";

import icons from "./assets/images/sprite.svg";

function App() {
  return (
    <div className="App">
      <Title>Welcome to IT-INCUBATOR</Title>
      <div className="box">
        <svg width="30" height="21">
          <use width="30" height="21" xlinkHref={`${icons}#arrow-scroll`} />
        </svg>
      </div>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
