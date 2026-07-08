import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent/MainComponent';
import ExploreComponent from './components/ExploreComponent/ExploreComponent';
import AboutUsComponent from './components/AboutUsComponent/AboutUsComponent';
import CitiesComponent from './components/CitiesComponent/CitiesComponent';
import CallComponent from './components/CallComponent/CallComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainComponent />}>
          <Route path="/" ></Route>
            <Route path="/explore" element={<ExploreComponent />} ></Route>
            <Route path="/aboutus" element={<AboutUsComponent />} ></Route>
            <Route path="/cities" element={<CitiesComponent />} ></Route>
            <Route path="/call" element={<CallComponent />} ></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
