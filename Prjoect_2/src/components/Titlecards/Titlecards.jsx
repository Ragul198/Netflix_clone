import React, { useEffect, useState } from 'react'
import './Titlecards.css'
import Cards from '../../assets/cards/Cards_data'
import { useRef } from 'react';
import{Link} from "react-router-dom";
const Titlecards = ({ Catagory}) => {

  const cardsRef=useRef();
  const [apidata,setApidata]=useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTEwNWRmNjMxYWU0NjBlNjFlODExZGYyZTczMmFkNCIsIm5iZiI6MTc0MjYyNjQxOC43NTgwMDAxLCJzdWIiOiI2N2RlNWU3MjVmOTc3ODM2YWI3YWExMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NXBhfxsEQkPSL4qAZVXIVE5iQ8cYQChYc1qCN-COMhA'
    }
  };
  
  


  const handlewheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }
  useEffect(()=>{
      cardsRef.current.addEventListener('wheel',handlewheel);
      fetch(`https://api.themoviedb.org/3/movie/${Catagory?Catagory:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApidata(res.results) )
    .catch(err => console.error(err));
  },[]
  )
  return (
    <div className="titlecards">
        <h1>{Catagory?(Catagory.toUpperCase()):"Popular On Netflix"}</h1>
        <div className="cards" ref={cardsRef}>
        {apidata.map((card,index)=>{
            return(
                <Link className='card' key={index} to={`/player/${card.id}`} >
                    <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />
                    <p>{card.title}</p>
                    
                </Link>
            )
        })}
        </div>
    </div>
  )
}

export default Titlecards