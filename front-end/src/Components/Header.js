import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Button, Nav } from 'react-bootstrap';

const Header = () => {
  const Navigate = useNavigate()
  const style = {
    fontSize: "1rem",
    color: "white",
    textDecoration: "none",
    alignItems: "center",
    display: "flex",
    padding: "10px"
  }

  const addUser = () => {
    Navigate("/add")

  }


  return (<>
    <>
      <Navbar style={{ position: "fixed", top: "0", width: "100%", overflow: "hidden", backgroundColor: "#f064dd" }} bg="" variant="primary">
        <Container >
          <Navbar.Brand style={{ color: "white", fontFamily: "sans-serif,serif", fontSize: "1.5rem" }} to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg> Students Details</Navbar.Brand>
          <Nav style={{ marginRight: "12rem" }}>

            <Link style={style} to="/">Home</Link>
            <Link style={style} to="/about">About</Link>
            <div className="d-flex ">
              <Button onClick={addUser} style={{
                marginLeft: "22rem", marginRight: "-10rem",
                display: "flex"
              }} variant="light">Add User</Button>{' '}
            </div>
          </Nav>

        </Container>



      </Navbar>

    </>
  </>
  )
}

export default Header;