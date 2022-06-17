import React from 'react'
import {BrowserRouter,Route,Routes,Navigate, NavLink} from "react-router-dom"
import {About} from "../componentes/About"
import { Dashboard } from "../componentes/Dashboard"
import {Header} from "../componentes/Header"
import { Home } from "../componentes/Home"
function Navegation() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
              <NavLink to='About'>
                About
              </NavLink>
            </li>
            <li>
            <NavLink to='Dashboard'>
                Dashboard
              </NavLink>
            </li>
            <li>
            <NavLink to='Header'>
                 Header
              </NavLink>
            </li>
            <li>
            <NavLink to='Home'>
                Home
              </NavLink>  
            </li>
        </ul>
    </nav>
    <Routes>
      <Route path='About' element = {<About/>}/>
      <Route path='Dashboard' element = {<Dashboard/>}/>
      <Route path='Header' element = {<Header/>}/>
      <Route path='Home' element = {<Home/>}/>
    </Routes>
    </BrowserRouter>

  )
}
export {Navegation}