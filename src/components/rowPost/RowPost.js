import React, { useEffect,useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import Youtube from 'react-youtube'
import {API_KEY, imageUrl} from '../../Constants/constants'

function RowPost(props) {
    const [urlid,seturltId]=useState()
    const [orginals, setorginals] = useState([])
   useEffect(() => {
      axios.get(props.url).then((response) => {
        console.log(response.data)
        setorginals(response.data.results)
      })
    }, [props.url])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 0,
      }
    };
    const handleMovieClicks = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-us`).then((response) => {
          console.log(response.data);
          if(response.data.results.length != 0){
            seturltId(response.data.results[0])
          }
    })
  }
    
  return (
    <div className='row'>
    <h3 className='RowTitle'>
       {props.title}
    </h3>
    <div className="posters">
     {   orginals.map((obj)=>{
        return(
            <div>

                <img onClick={()=>handleMovieClicks(obj.id)} className={props.isSmall ? 'smallPoster' : 'PostImage'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
                <h5 className='movieTitle'>{obj.title}</h5>
            </div>
           
        )
     })}
    </div>
  {urlid &&  <Youtube  opts={opts} videoId={urlid.key}/>}
  
    </div>
  )
}

export default RowPost