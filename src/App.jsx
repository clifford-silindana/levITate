import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

//page import
import Login from './pages/Login';


//component imports


function App() {

  return (
    <div>
          <BrowserRouter>

            <Routes>
      
              <Route path = "" element = {< Login />} >
                  <Route path="certify/" element={<CertifyPage />} />
                  <Route path="data-daily/" element={<DataDailyPage />} />
              </Route>

            </Routes>

          </BrowserRouter>
    </div>
  )
}

export default App
