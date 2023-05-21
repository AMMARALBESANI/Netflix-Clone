import { useState, useEffect } from "react"
import MovieList from "./MovieList"
import axios from "axios"


function Home() {
    const [trendMovie, setTrendMovie] = useState([])

        const getTrending = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`
        axios.get(serverURL)
            .then(response => {

                    setTrendMovie(response.data)
               
            })
            .catch(error => {
                console.log(error)
            })
    }
   
    useEffect(() => {
        getTrending()
    },[])

    return (
       
        <div style ={{display:"flex",flexWrap:"wrap",
        margin:"10px"}}>
              <MovieList trendMovie={trendMovie}/>
        </div>
        
          
        
    )
}

export default Home