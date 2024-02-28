import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MacBook from "./components/macbook/MacBook";
import Iphone from "./components/iphone/Iphone";
import AppleWatch from "./components/applewatch/AppleWatch";
import AirPods from "./components/airpods/AirPods";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Div>
        <Link style={{ textDecoration: "none" }} to="/macbook">
          <Icon>
          <img
            style={{width:'55px'}}
            src="https://www.istore.kg/media/header/macbook_pro_14_and_16__f6lz56ku7x6y_large_s0gEAbo.svg"
            alt=""
          />
          Mac
          </Icon>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/iphone">
          <Icon>
          <img
            style={{width:'30px'}}
            src="https://www.istore.kg/media/header/iphone_13_pro_light__bywz8u012wk2_large_Vr4Wl2b.svg"
            alt=""
          />
          Iphone
          </Icon>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/applewatch">
          <Icon>
          <img
            style={{width:'20px'}}
            src="https://www.istore.kg/media/header/watch_nav_series_7_light__dv9ck4f6pyi6_large_GOL3bKR.svg"
            alt=""
          />
          AppleWatch
          </Icon>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/airpods">
          <Icon>
          <img
            style={{width:'35px'}}
            src="https://www.istore.kg/media/header/airpods-pro-header_lSPZOZ0.svg"
            alt=""
          />
          AirPods
          </Icon>
        </Link>
      </Div>
      <Routes>
        <Route path="/macbook" element={<MacBook />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/applewatch" element={<AppleWatch />} />
        <Route path="/airpods" element={<AirPods />} />
      </Routes>
    </div>
  );
}

export default App;

const Div = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f1f1f1;
`;

const Icon = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`