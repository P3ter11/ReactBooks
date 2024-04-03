import React from 'react'
import { useParams } from 'react-router-dom'
import fantasy from '../data/fantasy.json'
import CommentArea from './CommentArea'

export const BookDetails = () => {
    const params = useParams();

    console.log(params.asin);
    const book = fantasy.find(book => book.asin === params.asin);

    if(!book){
        return <p>Il libro non è stato trovato</p>
    }
       

  return (
    <div className='d-flex justify-content-evenly'>
      <div>
        <h2>Dettagli del libro:</h2>
        <p>Titolo: {book.title}</p>
        <p>Prezzo: {book.price}</p>
        <img src={book.img} alt={book.title} style={{width: "300px", height: "auto"}}/>
      </div>
      <div>
          <CommentArea
            asin = {params.asin}
            //Controlla se è truthy selected, se vero cerca il libro con attributo asin corrispondente al valore di selected, una volta trovato restituisce il titolo
            selectedTitle= {fantasy.find((book) => book.asin === params.asin).title }
          />
      </div>
        
        
    </div>
    
    
  )
}

export default BookDetails;
