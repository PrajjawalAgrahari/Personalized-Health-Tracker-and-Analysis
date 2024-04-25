import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function App() {
  return (
    <div className="mmmmm">
    <div class="container1" id="container1">
      <div class="form-container1 sign-up">
        <form>
          <h1>Create Account</h1>
          <div class="aman-icons">
            <a href="aman" class="icon"
              ><i class="fa-brands fa-google-plus-g"></i
            ></a>
            <a href="aman" class="icon"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a href="aman" class="icon"><i class="fa-brands fa-github"></i></a>
            <a href="aman" class="icon"
              ><i class="fa-brands fa-linkedin-in"></i
            ></a>
          </div>
          <span>or email and registration</span>
          <input type="text" placeholder=" StudentName" />
          <input type="email" placeholder="Student-RollNo" />
          <input type="dob" placeholder="dd/mm/yy" />
          <input type="password" placeholder="Password" />
          <input type="email" placeholder="Email" />
          <input type="confirm password" placeholder="Confirm Password" />
          <button>Sign Up</button>
          <button>registration</button>
        </form>
      </div>
      <div class="Amant-container1">
        <div class="t">
          <div class="t-panel t-left">
            <h1>Welcome Back</h1>
            <p>enter your personal details and manage your health</p>
            <button class="hidden" id="login">Sign In</button>
          </div>
          <div class="t-panel t-right">
            <h1>IIITA Student! Entry-Exit Managment</h1>
            <p>
              Register with your personal details ofter that wlcome to IIITA
              entry-exit managment
            </p>
            <button class="hidden" id="register">Sign In</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
