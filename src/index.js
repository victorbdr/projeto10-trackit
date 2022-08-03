import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Initial from "./Initial";
import Habits from "./Habits";
import History from "./History";
import Today from "./Today";
import Register from "./Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />}></Route>
        <Route path="/register/" element={<Register />}></Route>
        <Route path="/habits/" element={<Habits />}></Route>
        <Route path="/today/" element={<Today />}></Route>
        <Route path="/history/" element={<History />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
