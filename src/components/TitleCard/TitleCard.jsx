import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import Card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCard = ({title , category}) => {
  
  const [ApiData, setApiData] = useState([]);
const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjY3YzdhNDYyMTBkNzVlNjUxMjE1MmUxNmQzMGI5ZSIsIm5iZiI6MTc2NjMyOTc4MS4xMjksInN1YiI6IjY5NDgwZGI1YTU3MDVjNzBhNDhjZTJjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0DRSd7Hm15SPkTWmFeKyN59bqXSzV4kEozxHLogKkjA'
  }
};





const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {

  fetch(
    `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
    options
  )
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

  const container = cardsRef.current;
  container.addEventListener('wheel', handleWheel);

  return () => {
    container.removeEventListener('wheel', handleWheel);
  };

}, [category]);


  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on netflix"} </h2>
      <div className="card-list" ref={cardsRef}>
        {ApiData.map((card , index )=> {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
  <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
  <p>{card.original_title}</p>
</Link>

        })}
      </div>
    </div>
  )
}

export default TitleCard
