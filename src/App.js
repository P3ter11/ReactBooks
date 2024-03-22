import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  const [theme, setTheme] = useState("light");

  const  toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  /* const useTheme = () => useContext(ThemeContext); */
  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <MyNav searchQuery = {searchQuery} setSearchQuery = {setSearchQuery}/>
    
      <Container>
        <Welcome />
        <AllTheBooks searchQuery = {searchQuery}/>
      </Container>
      <MyFooter />
    </ThemeContext.Provider>
    
  )
}

export default App
