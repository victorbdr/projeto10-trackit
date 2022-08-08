import ReactDOM from "react-dom";
import UserContext from "./contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./Initial";
import Habits from "./Habits";
import History from "./History";
import Today from "./Today";
import Register from "./Register";
import GlobalStyle from "./globalStyles";
import { useState } from "react";
export default function App() {
  const [token, setToken] = useState([]);
  const [image, setImage] = useState([]);
  const [circle, setCircle] = useState([]);
  return (
    <UserContext.Provider
      value={{ token, setToken, setImage, image, circle, setCircle }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial />}></Route>
          <Route path="/register/" element={<Register />}></Route>
          <Route path="/habits/" element={<Habits />}></Route>
          <Route path="/today/" element={<Today />}></Route>
          <Route path="/history/" element={<History />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
