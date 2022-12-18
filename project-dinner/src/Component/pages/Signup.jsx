import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const history = useNavigate()
  const [formState , setFormState] = useState({
    name : "",
    lastName : "",
    email : "",
    password : ""
  })

  const handleChange = (e)=>{
   setFormState({
    ...formState,
    [e.target.name] : e.target.value,
   })
   
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post(`http://localhost:3000/login`,{
      ...formState,
    })
   history('/login')
   
  }
  return (
    <>
    <Navbar/>
    <br />
      <Container className="shadow p-3 mb-5 bg-body rounded mt-5">
        <p className="h1 p-3">SignUp</p>
        <form className="p-3" onSubmit={handleSubmit} >
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    </>
  );
}
