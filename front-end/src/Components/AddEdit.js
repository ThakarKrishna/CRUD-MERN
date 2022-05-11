import React, { useState, useEffect } from 'react'
import "./form.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: ""
};

const AddEdit = () => {

  const Navigate = useNavigate()

  const {id}= useParams()
  console.log("🚀 ~ file: AddEdit.js ~ line 17 ~ AddEdit ~ id", id)
  const [state, setState] = useState(initialState);
  // const { name, email, phone, address } = initialState;

  useEffect(() => {
    if (id) {
      getSingleUser(id)
    }
  }, [id])

  const getSingleUser = (id) => {
    console.log("🚀 ~ file: AddEdit.js ~ line 31 ~ getSingleUser ~ id", id)
    axios.get(`http://localhost:6600/students/${id}`)
      .then((res) => {
        console.log("response", res)
        if (res.status === 200) {
          setState({ ...res.data});
        }
      }).catch(err => {
        console.log(err)
      })
  }

  const updateUser = async (data, id) => {
    const res = await axios.patch(`http://localhost:6600/students/${id}`, data);
    if (res.status === 200) {
      toast.success(res.data);
      // console.log(res.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if (!id) {
        axios.post("http://localhost:6600/students", state)
      .then((res) => {
        if(res.status===201){
          toast.success("Successfuly Added")
          setState("")
        }
      }).catch((err) => console.log(err))
      } else {
        updateUser(state, id);
      }
      Navigate("/");
      // }
      console.log("updated user",state);


  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  console.log(state)

  return (
    <>
      <form action='/register' method='post' style={{ marginTop: "10rem" }} onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center", color: "#4a89dc", marginBottom: "2rem", marginTop: "2rem" }} className="container">

        </div>

        <div className="group">
          <input type="text" name='name' value={state.name}
            onChange={handleInputChange} /><span className="highlight"></span><span className="bar"></span>
          <label> Name</label>
        </div>


        <div className="group">
          <input type="email" name='email' value={state.email}
            onChange={handleInputChange} /><span className="highlight"></span><span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="group">
          <input type="text" name='phone' value={state.phone}
            onChange={handleInputChange} /><span className="highlight"></span><span className="bar"></span>
          <label>Phone</label>
        </div>
        <div className="group">
          <span className="highlight"></span><span className="bar"></span>
          <input type="text" name='address' value={state.address}
            onChange={handleInputChange} />
          <span className="highlight"></span><span className="bar"></span>
          <label>Address</label>
        </div>

        <button type="submit" className="button buttonBlue">
    {id? "Update":"Register"}
          <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
        </button>
      </form></>
  )
}

export default AddEdit;