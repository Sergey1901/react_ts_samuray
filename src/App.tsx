import React from 'react';
import './App.css';
import {Nav} from "./coponents/Nav/Nav";
import {Profile} from "./coponents/Profile/Profile";
import {Dialogs} from "./coponents/Dialogs/Dialogs";
import Header from "./coponents/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Nav/>
              <div className='App-content'>
                  <Routes>
                  <Route path='/dialogs' element={Dialogs}/>
                  <Route path='/profile' element={Profile}/>
              </Routes>
              </div>
              . </div>
      </BrowserRouter>

  );
}

export default App;



