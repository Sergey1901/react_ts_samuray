import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateType} from "./redux/state";



export type PropsDataType = {
state: StateType
}

function App(props: PropsDataType) {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Nav/>
              <div className='App-content'>
                  <Routes>
                  <Route path='/dialogs'
                         element={<Dialogs dialogsData={props.state.dialogPage.dialogs} messagesData={props.state.dialogPage.messages}/>}/>
                  <Route path='/profile'
                         element={<Profile posts={props.state.profilePage.posts}/>}/>
              </Routes>
              </div>
              . </div>
      </BrowserRouter>

  );
}

export default App;



