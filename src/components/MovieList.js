import Movie from "./Movie"
function MovieList(props){
  
    return(
        <>
          {props.trendMovie.map(item => {
                return (
                  
                   <div key ={item.id}>
                   <Movie data={item}  /> 
                   </div>
                  
                  
                 
                )
            })}
        </>
    )
}

export default MovieList