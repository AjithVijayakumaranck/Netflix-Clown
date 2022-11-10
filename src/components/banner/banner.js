import React from 'react'
import "./banner.css"
import {useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/constants'

function Banner() {
  const [movie,setMovie] = useState()
  useEffect(() => {
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
  console.log(Response.data.results[0]);
  console.log(Response.data.results.length)
  const index = Math.floor(Math.random() * Response.data.results.length);
  console.log(index)
  setMovie(Response.data.results[index])
})
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
        <div className="content">
            <h1 className="title">{movie ? movie.title ? movie.title : 'MovieName' : ''}</h1>
            <div className="bannerButtons">
                <button className="button">
                    Play
                </button>
                <button className="button">
             Add List
                </button>
            </div>
            <h1 className="description">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fadeBottom"></div>
    </div>
  )
}


export default Banner