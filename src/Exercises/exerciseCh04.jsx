import React, { useState } from "react";
import "./exerciseCh04.css";
export default function ExerciseCh04() {
  const [textype, settextype] = React.useState("password");
  const handlebtn = () => {
    settextype((prev) => (prev === "password" ? "text" : "password"));
  };
  return (
    <>
      <form action="#" className="form-container">
        <h3>Hello, Welcome Back User</h3>
        <div className="inputBoxs">
          <input className="input" type="email" placeholder="Email address" />
          <input className="input" type={textype} placeholder="Password" />
        </div>
        <div className="btns">
          <button>Login</button>
          <button onClick={handlebtn}>Show</button>
        </div>
      </form>
    </>
  );
}
