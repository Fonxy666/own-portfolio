import React from "react";

const AboutMe = () => {

  return (
    <div className="container">
      <p>
        My name is Viktor Poszt, and I'm 29 years old. Currently, I live in Szeged with my girlfriend.
      </p>
      <p>
        In my childhood, I spent most of my time playing computer games. I was always amazed by how it's possible to move a character with arrows, navigate the computer with a mouse,
        create applications that can make people's lives easier and programming also allows us to develop robots that can assist doctors in healthcare.
      </p>
      <p>
        Wanting more for myself, I revisited my childhood dream of becoming a programmer.
        After discussions with my developer friend, who recognized my open-minded and agile mindset, I decided to enroll in the Codecool full-stack developer course online in February 2023.
      </p>
      <p>
        I consider myself to be a funny, communicative, open-minded, agile person, though I can be somewhat shy. When it comes to hobbies, I make it a point to engage in daily exercises to stay active.
        Additionally, my love for gaming is still very much alive!
      </p>
      <div>
        Some of the developers opinion:
      </div>
      <div>
        "He has the ability to comprehend sophisticated concepts, and after understanding them he can quickly implement what he has learned in a live project.
        By now he managed to build himself up in the field of IT to a level where he would make a great addition to any team as a Junior Developer." - Erik Rabóczki
      </div>
      <div>
      "He is a very agile, open-minded person, who can learn new programming languages and frameworks rapidly. During our collaboration on his pet project,
      he demonstrated his ability to grasp sophisticated concepts and implement them efficiently. His hardworking mentality was evident when he successfully delivered high-quality code under tight deadlines.
      These qualities make him a valuable asset to any development team." - Viktor Kocsis
      </div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Frontend languages
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <li>CSS</li>
              <li>HTML</li>
              <li>Javascript</li>
              <li>Razor Pages</li>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Backend languages
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <li>Express.Js</li>
              <li>C#</li>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Database languages
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
