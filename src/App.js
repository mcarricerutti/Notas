import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotasContainer from "./components/FunNote/FunNote";

function App() {

  return (
    <>
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<NotasContainer />}/>

    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
