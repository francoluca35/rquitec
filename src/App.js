import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import {About} from "../src/Pages/Parallax/Parallax";
import Jurnal from "./Pages/Jurnal";
import Project from "./Pages/Project";
import Contact from './Pages/Contact';





function App() {
  return (
   <div className="App">
    <Sidebar/>
    <MainContentStyled>
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/About" element={<About />} />
    <Route path="/Jurnal" element={<Jurnal />} />
    <Route path="/Project" element={<Project />} />
    <Route path="/Contact" element={<Contact/>} />
   </Routes>
  

    </MainContentStyled>
   </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 12.1rem;
  min-height:100vh;


  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }


`;



export default App;
