import { Alert } from 'react-bootstrap'
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Welcome = () => {

  const {theme} = useContext(ThemeContext);
  
  return(
    <Alert className={`text-center ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
    <h1>Benvenuti in EpiBooks!</h1>
    </Alert>
  )
  
  }

export default Welcome
