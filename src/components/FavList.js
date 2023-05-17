
import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdatedModal from "./UpdatedModal";
import axios from "axios";

function FaveList() {
    const posterPathURL = "http://image.tmdb.org/t/p/w500/"
    const [Fav, setFav] = useState([]);
    const [clickedItem, setclickedItem] = useState({});
    const [updateFlag, setUpdateFlg] = useState(false);
    const [updatedData, setUpdatedData] = useState([])
    
    const showUpdateModel = (item) => {
        setUpdateFlg(true)
        setclickedItem(item)
        console.log(item)
    }

    const closeUpdateModel = () => {
        setUpdateFlg(false)
    }



    
        const deleteItem = (item) => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getmove/${item.id}`
         axios.delete(serverURL)
          .then(data=>{
            const serverURL = `${process.env.REACT_APP_serverURL}/getmove`
            axios.get( serverURL)
            .then(data=>{
                 setUpdatedData(data.data)
               
                
            })
          })  
    
}

    const Renfave = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getmove`
        fetch(serverURL)
            .then((response) => {
                response.json()
                    .then(data => {
                        setFav(data)
                        
                    })
            })
            .catch(error => {

            })


    }


    const takenUbtdatedData = (arr) => {
        setUpdatedData(arr)
    }


    useEffect(()=>{
        setUpdatedData(Fav)
    },[Fav])

    useEffect(() => {
        Renfave()
    }, [])


    return (
        <div style={{
            display: "flex", flexWrap: "wrap",
            margin: "10px"
        }}>
            {updatedData.map(item => {
                return (
                    <Card style={{ width: '18rem', height: "100%" }} key={item.id}>
                        <Card.Img variant="top" src={posterPathURL + item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.overview}
                            </Card.Text>
                            <Card.Text>
                                {item.release_date}
                            </Card.Text>
                            <Card.Text>
                                {item.comment}
                            </Card.Text>
                            <Button variant="primary" style={{ marginRight: "5px" }} onClick={() => { showUpdateModel(item) }}>Update</Button>
                            <Button variant="danger" onClick={() => { deleteItem(item) }} >Delete</Button>
                        </Card.Body>
                    </Card>
                )
            })}

            <UpdatedModal updateFlag={updateFlag} closeUpdateModel={closeUpdateModel} clickedItem={clickedItem} takenUbtdatedData={takenUbtdatedData} />
        </div>
    )
}


export default FaveList