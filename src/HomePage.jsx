// import logo from './logo.svg';
import "./HomePage.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App1">
        <div className="navbar1">
          <div className="home">
            <p id="name">HEALTH TRACKER AND ANALYSIS</p>
          </div>
          <div className="sign1">
           <Link to="/login"> <button className=" button" id="login">
              {" "}
              login{" "}
            </button></Link>
            <Link to="/signup"><button className="button" id="signup">
              sign up
            </button></Link>
          </div>
        </div>
        <div className="aboutus"></div>
        <div className="exercise1">
          <p id="p1">Exercises</p>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Filter</button>
          <div class="dropdown-content">
            <a href="#">chest</a>
            <a href="#">abs</a>
            <a href="#">lowerbody</a>
            <a href="#">face</a>
            <a href="#">shoulders</a>
          </div>
        </div>
        <div className="content flex flex-wrap">
          <iframe
            className="video"
            width="24%"
            height="315"
            src="https://www.youtube.com/embed/dPb9JxFMuuE?si=bW3dkYL87__rR_J1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="video"
            width="24%"
            height="315"
            src="https://www.youtube.com/embed/QdT-Bgmp2u4?si=0TwY6Q-D-Ui85ccn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="video"
            width="24%"
            height="315"
            src="https://www.youtube.com/embed/N9rQIk9puXI?si=K9m9ltdHnmnaGGiu"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="video"
            width="24%"
            height="315"
            src="https://www.youtube.com/embed/D0K-U0pFj4k?si=Ucm72Ki9d1TQqlad"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="video"
            width="24%"
            height="315"
            src="https://www.youtube.com/embed/X0xt0fYTZv8?si=ZUmDfqkmV7tZ9m7Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="video"
            width="24%"
            height="315"
            src="https://www.youtube.com/embed/oJIk2PyukjY?si=wnkKW2aOHepWpd5o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="video"
            width="24%"
            height="315"
            src="https://www.youtube.com/embed/g5oQZmk7xMc?si=gOKAbDPlvBqIOXuI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="video"
            width="24%"
            height="315"
            src="https://www.youtube.com/embed/6JZZTLfoNMY?si=OJg7lKTOxqa5-xHl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="faq">
        <div className="fre">
          <p id="p3">FREQUENTLY ASKED QUESTIONS</p>
        </div>
        <div className="freq">
          <details className="questions">
            <summary>Why health is important to us?</summary>
            <div>
              Your health is one of the most important things in your life. It
              affects your physical, mental, and emotional well-being. That's
              why it's so important to be proactive about your health and take
              steps to prevent illness and disease. Being proactive in health
              means taking steps to improve your health before you get sick.
            </div>
          </details>
          <details className="questions">
            <summary> Is it possible to increase my height after 18?</summary>
            <div>
              By age 18 or older, most people have finished puberty. Therefore,
              the growth rate at this time is relatively slow, only fluctuating
              a few centimeters per year. Usually, the height after the age of
              18 can continue to increase until the age of 20, or in some cases
              it can increase until the age of 22.
            </div>
          </details>
          <details className="questions">
            <summary>
              how much protein does a normal person need everyday?
            </summary>
            <div>
              The recommended dietary allowance to prevent deficiency for an
              average sedentary adult is 0.8 grams per kilogram of body weight.
              For example, a person who weighs 165 pounds, or 75 kilograms,
              should consume 60 grams of protein per day.
            </div>
          </details>
          <details className="questions">
            <summary>Why I am skinny even after I eat a lot everyday?</summary>
            <div>
              You may have a very high metabolism and find it hard to put on
              weight, even if you eat foods that have a lot of calories. You may
              not follow a healthy, balanced diet because you forget to eat or
              cannot afford nutritious foods.
            </div>
          </details>
          <details className="questions">
            <summary>
              How does substance (taking drugs) abuse affect a person’s health?
            </summary>
            <div>
              Substance abuse means taking drugs (other than those prescribed by
              a doctor for a specific illness) in amounts that are dangerous or
              that prevent a person from doing everyday things, including going
              to school or work. The substance being abused can be alcohol,
              marijuana, pills called tranquilizers that make people feel very
              tired or relaxed, household products that are inhaled, or a number
              of other drugs. Drug abuse happens all over the world, to all
              kinds of people, young and old. It frequently causes terrible
              damage to a person’s body, to relationships with family and
              friends, and to career or education. In some cases, substance
              abuse leads to death, because the abuser gets involved in an
              accident or because he or she takes enough of the substance to
              cause the body to completely shut down.
            </div>
          </details>
          <details className="questions">
            <summary>Do I need to warm up before my workouts?</summary>
            <div>
              You bet! We know it can be tempting to get straight into it,
              especially if you’re short on time, but a proper warm-up is really
              important. According to the Mayo Clinic, warming up and cooling
              down may help reduce your risk of injury and improve performance.
              A good warm-up prepares your body for activity, raises your body
              temperature and increases blood flow to your muscles.
            </div>
          </details>
          <details className="questions">
            <summary>
              I’m struggling to get through my workouts. What should I do?
            </summary>
            <div>
              During your first few weeks of a new fitness routine, there’s a
              chance you might struggle to reach the end of a workout or you may
              need to take regular breaks. That’s ok! The important thing is to
              keep persisting each day and your fitness will slowly build.
            </div>
          </details>
          <details className="questions">
            <summary>How can I look younger?</summary>
            <div>
              <li>Stay out of the sun,</li>
              <li>Drink plenty of water,</li>
              <li>Get some sleep,</li>
              <li>Eat a diet rich in plants,</li>
              <li>Establish a good routine,</li>
              <li>Limit alcohol and caffeine.</li>
            </div>
          </details>
          <details className="questions">
            <summary>How can I grow muscles?</summary>
            <div>
              Resistance training promotes muscle growth. Examples of resistance
              training include the use of free weights, weight machines, your
              own body weight or resistance bands. Suggestions include: Train
              just two or three times per week to give your muscles time to
              recover.
            </div>
          </details>
          <details className="questions">
            <summary>What food will help me to build muscles faster?</summary>
            <div>
              To maximize muscle growth, a clean bulk is better than simply
              eating high calorie foods. This may include a well-balanced diet
              of healthy fats, carbohydrates, and proteins. Some foods include
              chicken, shrimp, eggs, salmon, brown rice, quinoa, sweet potatoes,
              and fruits.
            </div>
          </details>
          <details className="questions">
            <summary>
              Why I am not building muscles even after exercises?
            </summary>
            <div>
              Your body's ability to build muscle can be affected by many
              factors. These include your genetics, diet, type of workouts
              you're doing, hormones, age and even gender. More women are
              starting to lift weights and are no longer afraid of getting
              "bulky" from strength training.
            </div>
          </details>
        </div>
        <div className="footer">
            
          </div>
      </div>
    </>
  );
}

export default App;
