import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react"
import ModalMovie from './ModalMovie';

function Movie(props) {
    const posterPathURL = "http://image.tmdb.org/t/p/w500/"
    const [clickedItem , setclickedItem] = useState({})
    const [showFlag,setShowFlag] = useState(false)
    


    const handelshow =() => {
       setShowFlag(true)
       setclickedItem(props.data)
       
    }

    const  handelclose = () =>{
        setShowFlag(false)
    }
    return (
        <>

            <Card style={{ width: '18rem' }} key={props.data.id}>
                <Card.Img variant="top" src={posterPathURL + props.data.poster_path} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.data.release_date}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{handelshow(props.data)} }>add to favorite</Button>
                </Card.Body>
            </Card>
         
          <ModalMovie showFlag={showFlag} handelclose={handelclose} clickedItem={clickedItem} data={props.data} />
        </>
    )
}

export default Movie