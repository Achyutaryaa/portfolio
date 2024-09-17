
// name section starts
const nameList = ["Achyutarya Raaz", "अच्युतआर्य राज़"];

const nameField = document.querySelector(".name");
// name section ends

// resume section start
const resume = document.getElementById("resume");
const resumeLink = 'https://drive.google.com/file/d/1CcYYKmCl8ehhDejUePHaH551YRiFMozt/view?usp=drive_link';

const resumeWrapper = document.createElement("a");
resumeWrapper.style.textDecoration = "none";
resumeWrapper.target = '_blank';
resumeWrapper.href = resumeLink;
resumeWrapper.appendChild(resume.cloneNode(true)); // Clone and append the original resume element
resume.parentNode.replaceChild(resumeWrapper, resume); // Replace the original resume element with the new wrapper

// resume ends

// about
const info = document.getElementById("info");
info.innerHTML = "I am a 3nd-year <b><i>computer science</i></b> student at <b><i>Quantum University, Roorkee</i></b>. My passion for computers and technology began at a young age, and it has been a driving force in my life ever since. I am dedicated to expanding my knowledge and skills in computer science, with a particular interest in software development and cyber security. Throughout my studies, I have actively sought out opportunities to work on various projects and further enhance my understanding of programming languages and algorithms.<br><br>Outside of my academic pursuits, I have also participated in coding competitions and hackathons, where I have had the opportunity to collaborate with peers and put my problem-solving abilities to the test. These experiences have not only strengthened my technical skills but have also provided me with valuable insights into working effectively within a team.<br><br> In addition to my technical interests, I am also passionate about contributing to the community. I have volunteered with local organizations to teach basic computer skills to underprivileged children, allowing me to share my knowledge and foster a greater appreciation for the potential of technology.<br><br> As I continue on my academic journey, I am committed to seizing every opportunity to further my skills, broaden my understanding, and ultimately make a positive impact in the field of computer science. I am excited about the possibilities that lie ahead and am eager to continue learning and growing as a computer scientist.";

// about ends

const projectLinks = {
    gameProject: "https://achyutaryaa.github.io/freeCodeCamp-gameProject",
    toDoList: "https://achyutaryaa.github.io/todo-list",
    areaCalculator: "https://achyutaryaa.github.io/calculate-triangle-area",
    tempConverter: "https://achyutaryaa.github.io/temperature-calculator"
};
