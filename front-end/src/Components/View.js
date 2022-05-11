import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {

  const strong = {
    fontSize: "1.2rem",
    fontFamily: "serif",
    font: "bold",
    padding: "10px"
  }

  const span = {
    padding: "10px",
    fontSize: "1rem",

  }

  const [user, setUser] = useState();
  const { id } = useParams()
  const Navigate = useNavigate()

  useEffect(() => {
    if (id) {
      getSingleUser(id)
    }
  }, [id])

  const getSingleUser = (id) => {
    console.log("🚀 ~ file: AddEdit.js ~ line 31 ~ getSingleUser ~ id", id)
    axios.get(`http://localhost:6600/students/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setUser({ ...res.data })
        }
      }).catch(err => {
        console.log(err)
      })
  }

  const goBack = () => {
    Navigate("/home")
  }

  return (
    <>
      <div className="container " style={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}>
        <Card className="text-center" style={{ width: "50%", border: "1px solid #efbbe9" }}  >
          <Card.Header style={{ padding: "1.5rem 1rem", backgroundColor: "#f064dd", fontSize: "1.4rem", color: "white" }} >User Details</Card.Header>
          <Card.Body>
            <strong style={strong}>ID :</strong>
            <span style={span}>{id}</span>
            <br />
            <br />

            <strong style={strong}>User Name :</strong>
            <span style={span}>{user && (user.name)}</span>
            <br />
            <br />
            <strong style={strong}>E-mail:</strong>
            <span style={span}>{user && user.email}</span>
            <br />
            <br />
            <strong style={strong}>Contact No :</strong>
            <span style={span}>{user && user.phone}</span>

            <br />
            <br />
            <strong style={strong}>Address :</strong>
            <span style={span}>{user && user.address}</span>
            <br />
            <br />
            <Button onClick={goBack} style={{ backgroundColor: "#f064dd",border:"1px solid #f064dd" }}  >Go Back</Button>
          </Card.Body>

        </Card>
      </div>
    </>
  )
}

export default View;