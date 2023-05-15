import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
function ModalMovie(props) {
    
    const posterPathURL = "http://image.tmdb.org/t/p/w500/"
    
    const addToDB =()=>{
        const serverURL = `http://localhost:3000/getmove`
       axios.post(serverURL , props.data)
       console.log(props.data)

    }

    return (
        <>

            <Modal show={props.showFlag} onHide={props.handelclose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedItem.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={posterPathURL+props.clickedItem.poster_path} width="100%"></Image>
                    {props.clickedItem.release_date}
                  <input type="text"/>
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