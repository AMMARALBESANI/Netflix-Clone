import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { Card } from "react-bootstrap";
function ModalMovie(props) {
    const [comment, setComment] = useState('');
    
    const posterPathURL = "http://image.tmdb.org/t/p/w500/"
    
    const addToDB =()=>{
       
        const serverURL = `${process.env.REACT_APP_serverURL}/getmove`
        const moveData ={
            ...props.data,
            comment:comment,
        }
       axios.post(serverURL , moveData).then(()=>{
        props.handelclose()
       })
    

    }

    return (
        <>

            <Modal show={props.showFlag} onHide={props.handelclose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedItem.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={posterPathURL+props.clickedItem.poster_path} width="100%"></Image>
                    <Card.Text>{props.clickedItem.release_date}</Card.Text>
                    <Card.Text>{props.clickedItem.overview}</Card.Text>
                    <Card.Text>  <input type="text" placeholder="add your comment" name="comment" value={comment} onChange={e=>setComment(e.target.value)} /></Card.Text>
                  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={props.handelclose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{addToDB(props.data)}} >
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie