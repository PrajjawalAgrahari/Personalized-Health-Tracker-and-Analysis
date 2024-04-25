import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="Big">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />

      <div className="box">
        <h1>Register</h1>
        <form>
          <div className="inputBox">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="type your Name"
              required=""
            />
          </div>
          <div className="inputBox">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              placeholder="type your Age"
              required=""
            />
          </div>
          <div className="inputBox">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="type your Height"
              required=""
            />
          </div>
          <div className="inputBox">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="type your Weight"
              required=""
            />
          </div>
          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="type your Email"
              required=""
            />
          </div>
          <div className="inputBox">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="type your username"
              required=""
            />
          </div>
          <div className="inputBox">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="type your password"
              required=""
            />
          </div>
          <div className="inputBox">
            <label htmlFor="userConfirmPassword">Confirm Password</label>
            <input
              type="password"
              name="userPassword"
              id="userConfirmPassword"
              placeholder="confirm your password"
              required=""
            />
          </div>
          <div className="inputBox1">
            <label className="Question">
              How do fitted jeans usually feel around your butt?
            </label>
            <div>
              <div id="left">
                <label htmlFor="jeansFit_A">A) Snug but not too tight</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="jeansFit"
                  id="jeansFit_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="jeansFit_B">B) Loose</label>
              </div>
              <div id="right">
                <input type="radio" name="jeansFit" id="jeansFit_B" value="B" />
              </div>
              <div id="left">
                <label htmlFor="jeansFit_C">C) Tight</label>
              </div>
              <div id="right">
                <input type="radio" name="jeansFit" id="jeansFit_C" value="C" />
              </div>
            </div>
          </div>

          <div className="inputBox1">
            <label className="Question">
              When you wrap your hand around your wrist, do your middle finger
              and thumb:
            </label>
            <div>
              <div id="left">
                <label htmlFor="wristTouch_A">A) Barely touch</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="wristTouch"
                  id="wristTouch_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="wristTouch_B">B) Overlap</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="wristTouch"
                  id="wristTouch_B"
                  value="B"
                />
              </div>
              <div id="left">
                <label htmlFor="wristTouch_C">C) Not touch</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="wristTouch"
                  id="wristTouch_C"
                  value="C"
                />
              </div>
            </div>
          </div>

          <div className="inputBox1">
            <label className="Question">
              How would you describe your overall body shape?
            </label>
            <div>
              <div id="left">
                <label htmlFor="bodyShape_A">A) Natural v-shaped</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="bodyShape"
                  id="bodyShape_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="bodyShape_B">
                  B) Naturally very lean and skinny
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="bodyShape"
                  id="bodyShape_B"
                  value="B"
                />
              </div>
              <div id="left">
                <label htmlFor="bodyShape_C">C) Naturally wide and heavy</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="bodyShape"
                  id="bodyShape_C"
                  value="C"
                />
              </div>
            </div>
          </div>

          <div className="inputBox1">
            <label className="Question">What is your chest measurement?</label>
            <div>
              <div id="left">
                <label htmlFor="chestMeasurement_A">
                  A) Between 37 and 44 inches
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="chestMeasurement"
                  id="chestMeasurement_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="chestMeasurement_B">B) Under 37 inches</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="chestMeasurement"
                  id="chestMeasurement_B"
                  value="B"
                />
              </div>
              <div id="left">
                <label htmlFor="chestMeasurement_C">C) Over 44 inches</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="chestMeasurement"
                  id="chestMeasurement_C"
                  value="C"
                />
              </div>
            </div>
          </div>

          <div className="inputBox1">
            <label className="Question">
              How would you rate your metabolism?
            </label>
            <div>
              <div id="left">
                <label htmlFor="metabolism_A">
                  A) Fast without difficulty building muscle
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="metabolism"
                  id="metabolism_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="metabolism_B">
                  B) So fast it's hard to gain muscle
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="metabolism"
                  id="metabolism_B"
                  value="B"
                />
              </div>
              <div id="left">
                <label htmlFor="metabolism_C">C) Slow</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="metabolism"
                  id="metabolism_C"
                  value="C"
                />
              </div>
            </div>
          </div>

          <div className="inputBox1">
            <label className="Question">
              When it comes to gaining weight, do you:
            </label>
            <div>
              <div id="left">
                <label htmlFor="weightGain_A">
                  A) Easily gain muscle without much fat
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="weightGain"
                  id="weightGain_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="weightGain_B">
                  B) Struggle to gain muscle and tend to gain fat
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="weightGain"
                  id="weightGain_B"
                  value="B"
                />
              </div>
              <div id="left">
                <label htmlFor="weightGain_C">
                  C) Easily gain both muscle and fat
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="weightGain"
                  id="weightGain_C"
                  value="C"
                />
              </div>
            </div>
          </div>

          <div className="inputBox1">
            <label className="Question">Does your upper body resemble:</label>
            <div>
              <div id="left">
                <label htmlFor="upperBody_A">A) An upside-down triangle</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="upperBody"
                  id="upperBody_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="upperBody_B">
                  B) A vertically long and horizontally narrow rectangle
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="upperBody"
                  id="upperBody_B"
                  value="B"
                />
              </div>
              <div id="left">
                <label htmlFor="upperBody_C">C) A square or round shape</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="upperBody"
                  id="upperBody_C"
                  value="C"
                />
              </div>
            </div>
          </div>

          <div className="inputBox1">
            <label className="Question">
              How would you describe your ribcage compared to your collarbones
              and hips?
            </label>
            <div>
              <div id="left">
                <label htmlFor="ribcageComparison_A">A) Narrower</label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="ribcageComparison"
                  id="ribcageComparison_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="ribcageComparison_B">
                  B) As narrow as your collarbones and hips
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="ribcageComparison"
                  id="ribcageComparison_B"
                  value="B"
                />
              </div>
              <div id="left">
                <label htmlFor="ribcageComparison_C">
                  C) As thick as your collarbones and hips
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="ribcageComparison"
                  id="ribcageComparison_C"
                  value="C"
                />
              </div>
            </div>
          </div>

          <div className="inputBox1">
            <label className="Question">
              Which body type do you see more in the mirror?
            </label>
            <div>
              <div id="left">
                <label htmlFor="bodyType_A">
                  A) Mesomorph (v-taper appearance)
                </label>
              </div>
              <div id="right">
                <input
                  type="radio"
                  name="bodyType"
                  id="bodyType_A"
                  value="A"
                  required=""
                />
              </div>
              <div id="left">
                <label htmlFor="bodyType_B">
                  B) Ectomorph (narrow and lanky)
                </label>
              </div>
              <div id="right">
                <input type="radio" name="bodyType" id="bodyType_B" value="B" />
              </div>
              <div id="left">
                <label htmlFor="bodyType_C">
                  C) Endomorph (wider and thicker)
                </label>
              </div>
              <div id="right">
                <input type="radio" name="bodyType" id="bodyType_C" value="C" />
              </div>
            </div>
          </div>

          <button type="submit" name="" style={{ float: "left" }}>
            Submit
          </button>
          <a className="button" href="login.html" style={{ float: "left" }}>
            Login
          </a>
        </form>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
