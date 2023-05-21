import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import { useEffect } from 'react';

function UpdatedModal(props) {
    const posterPathURL = "http://image.tmdb.org/t/p/w500/"

    const submithandler = async (e) => {
        e.preventDefault();
        const obj = {
            posterPathURL: posterPathURL,
            title: e.target.title.value,
            poster_path: e.target.poster_path.value,
            comment: e.target.comment.value,
            release_date: e.target.release_date.value,
            overview: e.target.overview.value,
        }

        const serverURL = 
        `${process.env.REACT_APP_serverURL}/getmove/${props.clickedItem.id}`

        const result = await axios.put(serverURL, obj)

        props.closeUpdateModel()

        props.takenUbtdatedData(result.data)
    }



    return (
        <>

            <Modal show={props.updateFlag} onHide={props.closeUpdateModel} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={submithandler}>
                        <Form.Group>
                            <Form.Label>title</Form.Label>
                            <Form.Control name="title" type="text" defaultValue={props.clickedItem.title} readOnly={true} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>release_date</Form.Label>
                            <Form.Control name="release_date" type="text" defaultValue={props.clickedItem.release_date} readOnly={true} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>image</Form.Label>
                            <Form.Control name="poster_path" type="text" defaultValue={props.clickedItem.poster_path} readOnly={true} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>overview</Form.Label>
                            <Form.Control name="overview" type="text" defaultValue={props.clickedItem.overview} readOnly={true} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>comment</Form.Label>
                            <Form.Control name="comment" type="text" defaultValue={props.clickedItem.comment} />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ margin: "5px" }}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeUpdateModel} >
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdatedModal;