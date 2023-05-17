import { useState, useEffect } from "react"
import MovieList from "./MovieList"


function Home() {
    const [trendMovie, setTrendMovie] = useState([])

        const getTrending = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`
        fetch(serverURL)
            .then(response => {

                response.json().then(data => {
                  
                    setTrendMovie(data)
                    
                })
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