import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Join} />
        <Route path="/chat" Component={Chat} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
