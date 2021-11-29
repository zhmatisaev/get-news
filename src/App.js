import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContext, NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch } from "react-router-dom";

import DetailNews from "./DetailNews";
import "./App.css";

function App() {
  return (
    <NewsContextProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<News />}></Route>
          <Route path="/:title" exact element={<DetailNews />}></Route>
        </Routes>
      </Router>
    </NewsContextProvider>
  );
}

export default App;
