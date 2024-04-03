import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookDetails } from './components/BookDetails'

export const ThemeContext = createContext();

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [theme, setTheme] = useState("light");

  const  toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  /* const useTheme = () => useContext(ThemeContext); */
  return (
    <BrowserRouter>   
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route path='/' 
          element=
          {<Container>
            <Welcome />
            <AllTheBooks searchQuery = {searchQuery}/>
          
          </Container>}/>
          <Route path='/book/:asin' element={<BookDetails/>}/>

        </Routes>

        
      </ThemeContext.Provider>
      <MyFooter />
    </BrowserRouter>
    
  )
}

export default App
