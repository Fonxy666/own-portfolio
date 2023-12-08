import React from "react";
import ConstructImage from "../../Images/construct.jpg";
import EmployeeTableImage from "../../Images/employee_table.jpg";
import SolarWatchImage from "../../Images/solarwatch.jpg";
import { ImageCircle, ImageContainer, Image1, Text1, Image2, Text2, Image3, Text3 } from "../../Styles/Image.Styled";

const HomePage = () => {

  return (
    <div className="container">
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

        <div>
          Recent projects:
          <ImageContainer>
            <Text1>
              Constructor application:
              <a href="https://github.com/huttnerdavid/codebusters" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </Text1>
            <Image1>
              <ImageCircle src={ConstructImage} alt="..." className="rounded-circle"/>
            </Image1>
            <Text2>
              Employee data table application:
              <a href="https://github.com/CodecoolGlobal/the-employee-madness-v2-react-Fonxy666" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </Text2>
            <Image2>
              <ImageCircle src={EmployeeTableImage} alt="..." className="rounded-circle"/>
            </Image2>
            <Text3>
              Solarwatch application:
              <a href="https://github.com/CodecoolGlobal/solarwatch-api-1-csharp-Fonxy666" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </Text3>
            <Image3>
              <ImageCircle src={SolarWatchImage} alt="..." className="rounded-circle"/>
            </Image3>
          </ImageContainer>
      </div>
    </div>
  );
};

export default HomePage;
