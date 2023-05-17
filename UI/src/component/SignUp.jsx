import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const homeNavigate = useNavigate();
  const [userData, setUserData] = useState([], {
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const PostUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      Name: userData.name,
      Email: userData.email,
      Password1: userData.password,
    };

    const url = `https://localhost:7078/api/Techdome/Techdome_Signup`;
    const response = await axios
      .post(url, data)
      .then((result) => {
        if ((result.status = 200)) {
         
          swal(`${result.data.name} Register Successfully`);
          homeNavigate("/");
        } else {
          console.log(result.status);
        }
      })
      .catch((error) => {
        if ((error.status = 400)) {
          swal("Email is already Register");
        }
      });
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          marginLeft: "450px",
          marginTop: "150px",
        }}
      >
        <div>
          <form
          
            method="Post"
            onSubmit={submitData}
          >
            <div className="form-floating mb-3" style={{ width: "350px" }}>
              <input
                type="name"
                name="name"
                className="form-control"
                id="floatingInput"
                placeholder="name.com"
                value={userData.name}
                onChange={PostUserData}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3" style={{ width: "350px" }}>
              <input
                type="email"
                name="email"
                className="form-control"
                value={userData.email}
                id="floatingInput"
                placeholder="name@example.com"
                onChange={PostUserData}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={PostUserData}
                value={userData.password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="text-center p-3">
              <button type="submit" className="fill ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <img
          style={{ width: "100%", height: "569px" }}
          src="https://c4.wallpaperflare.com/wallpaper/363/495/820/clash-of-clans-supercell-games-2017-games-wallpaper-preview.jpg"
        />
      </div>
    </>
  );
}

export default SignUp;
