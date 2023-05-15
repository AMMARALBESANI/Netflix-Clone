import { useState, useEffect } from "react"
import MovieList from "./MovieList"


function Home() {
    const [trendMovie, setTrendMovie] = useState([])

        const getTrending = () => {
        const serverURL = `http://localhost:3000/trending`
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
        <>
         
            <MovieList trendMovie={trendMovie}/>
        </>
    )
}

export default Home