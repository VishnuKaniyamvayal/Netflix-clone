import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from 'axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function RowPost(props) {
  const [movie, setMovie] = useState([])
  useEffect(() =>{ axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      // // console.log(response.data)
      setMovie(response.data.results)

    }
  )


  },[])
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj)=>
            <img className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+ obj.backdrop_path }`} alt="" />
            )}
          
            
        </div>
    </div>
  )
}

export default RowPost