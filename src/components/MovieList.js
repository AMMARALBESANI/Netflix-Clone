import Movie from "./Movie"
function MovieList(props){
  
    return(
        <>
          {props.trendMovie.map(item => {
                return (
                   <>
                  <Movie data={item}  /> 
                  
                   </> 
                )
            })}
        </>
    )
}

export default MovieList