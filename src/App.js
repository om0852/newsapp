
import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
import New from './New';
import {
  BrowserRouter as Router,
  Route, Link, Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>

    <Navbar/>    
    {/* <New category="sport"/> */}
    <Routes>
    <Route path="/sport" element={<New  key="sport" category="sport"/>} />
    <Route path="/business" element={<New key="business" category="business"/>} />
    <Route path="/technology" element={<New key="technology" category="technology"/>} />
    <Route path="/health" element={<New key="health" category="health"/>} />
    <Route path="/science" element={<New key="science" category="science"/>} />
    {/* <New category="sport"/> */}
    </Routes>
      </Router>
      </div>
    )
  }
}

// export default App;
