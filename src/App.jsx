import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

//page import
import Login from './pages/Login';
import Landing from './pages/Landing';
import Home from './pages/Home';
import AllMyTickets from './pages/AllMyTickets';
import CreateTicket from './pages/CreateTicket';

//component imports


function App() {

  return (
    <div>
          <BrowserRouter>

            <Routes>

              <Route path="" element={<Landing />} />
              <Route path="login" element={<Login />} />
      
              <Route path = "tickets/" element = {< Home />} >
                  <Route path="" element={<AllMyTickets />} />
                  <Route path="new-ticket/" element={<CreateTicket />} />
              </Route>

            </Routes>

          </BrowserRouter>
    </div>
  )
}

export default App
