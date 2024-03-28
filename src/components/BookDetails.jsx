import React from 'react'
import { useParams } from 'react-router-dom'
import fantasy from '../data/fantasy.json'
import CommentArea from './CommentArea'

export const BookDetails = (handleClick, selected) => {
    const {asin} = useParams();

    const book = fantasy.find(book => book.asin === asin);

    if(!book){
        return <p>Il libro non è stato trovato</p>
    }
       

  return (
    <>
        <h2>Dettagli del libro:</h2>
        <p>Titolo: {book.title}</p>
        <p>Prezzo: {book.price}</p>
        <img src={book.img} alt={book.title} style={{width: "300px", height: "auto"}}/>
        <CommentArea
            
            asin = {asin}
            //Controlla se è truthy selected, se vero cerca il libro con attributo asin corrispondente al valore di selected, una volta trovato restituisce il titolo
            selectedTitle={ selected ? fantasy.find((book) => book.asin === selected)?.title : null}
          />
    </>
    
    
  )
}

export default BookDetails;
