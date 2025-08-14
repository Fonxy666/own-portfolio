import React from "react";
import { AboutMeContainer } from "../../Styles/AboutMe.Styled";
import cv from "../../Cv/VPCV.pdf";

const AboutMe = () => {
  const linkedInPath = "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4";
  const gitHubPath = "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8";
  
  const handleDownload = async () => {
    try {
      const response = await fetch(cv);
      const data = await response.blob();

      const link = document.createElement('a');
      link.href = URL.createObjectURL(data);
      link.download = 'viktor_poszt_cv.pdf';
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="container"  style={{textAlign: "justify"}}>
      <h5>
        Introduction:
      </h5>
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
      <p>
        In codecool i learnt several languages, that you can see below. I learned how to develop in a team, how to be passionate in programming, and how to be a good team player.
        I developed several projects in a team, and in my own as well. 
      </p>
      <h5>
        Some of the developers opinion:
      </h5>
      <p>
        "He has the ability to comprehend sophisticated concepts, and after understanding them he can quickly implement what he has learned in a live project.
        By now he managed to build himself up in the field of IT to a level where he would make a great addition to any team as a Junior Developer." - Erik Rabóczki (Codecool mentor)
      </p>
      <p>
        "He is a very agile, open-minded person, who can learn new programming languages and frameworks rapidly. During our collaboration on his pet project,
        he demonstrated his ability to grasp sophisticated concepts and implement them efficiently. His hardworking mentality was evident when he successfully delivered high-quality code under tight deadlines.
        These qualities make him a valuable asset to any development team." - Viktor Kocsis (Salesforce medior)
      </p>
      <section className="mb-4">
        <a href="https://www.linkedin.com/in/viktor-poszt/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d={linkedInPath}/>
          </svg>
        </a>
        <a href="https://github.com/Fonxy666" target="_blank" rel="noopener noreferrer"  style={{marginLeft: "10px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" className="bi bi-github" viewBox="0 0 16 16">
            <path d={gitHubPath}/>
          </svg>
        </a>
        <button onClick={handleDownload} width="30" height="30"type="button" className="btn btn-secondary" style={{backgroundColor: "grey", marginLeft: "10px"}}>
          Download CV
        </button>
      </section>
      <AboutMeContainer className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
              Frontend languages
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <li>CSS</li>
              <li>HTML</li>
              <li>Javascript</li>
              <li>Angular</li>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Backend languages
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <li>Express.Js</li>
              <li>C#</li>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Database languages
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MSSQL</li>
            </div>
          </div>
        </div>
      </AboutMeContainer>
    </div>
  );
};

export default AboutMe;
