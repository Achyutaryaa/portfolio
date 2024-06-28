
// name section starts
const nameList = ["Achyutarya Raaz", "अच्युतआर्य राज़"];

const nameField = document.querySelector(".name");
nameField.innerHTML = nameList[1];
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
const about = document.querySelector(".sec2 p");
//about.innerHTML = "I am a 3nd-year <b><i>computer science</i></b> student at <b><i>Quantum University, Roorkee</i></b>. My passion for computers and technology began at a young age, and it has been a driving force in my life ever since. I am dedicated to expanding my knowledge and skills in computer science, with a particular interest in software development and cyber security. Throughout my studies, I have actively sought out opportunities to work on various projects and further enhance my understanding of programming languages and algorithms.<br><br>Outside of my academic pursuits, I have also participated in coding competitions and hackathons, where I have had the opportunity to collaborate with peers and put my problem-solving abilities to the test. These experiences have not only strengthened my technical skills but have also provided me with valuable insights into working effectively within a team.<br><br> In addition to my technical interests, I am also passionate about contributing to the community. I have volunteered with local organizations to teach basic computer skills to underprivileged children, allowing me to share my knowledge and foster a greater appreciation for the potential of technology.<br><br> As I continue on my academic journey, I am committed to seizing every opportunity to further my skills, broaden my understanding, and ultimately make a positive impact in the field of computer science. I am excited about the possibilities that lie ahead and am eager to continue learning and growing as a computer scientist.";

// about ends
// Social medial section starts
const socialLinks = {
    gDev: "https://g.dev/Achyutaryaa",
    github: "https://github.com/Achyutaryaa",
    hackerRank: "https://hackerrank.com/Achyutaryaa",
    linkedin: "https://linkedin.com/in/Achyutaryaa",
    w3schools: "https://www.w3profile.com/Achyutaryaa",
    facebook: "https://facebook.com/KingAaryaa",
    instagram: "https://instagram.com/oneAaryaa",
    twitter: "https://x.com/oneAaryaa",
    youtube: "https://youtube.com/@Achyutaryaa"
};

const socialLinkTags = document.querySelectorAll(".contact-link");

socialLinkTags[0].setAttribute('href', socialLinks.gDev);
socialLinkTags[1].setAttribute('href', socialLinks.github);
socialLinkTags[2].setAttribute('href', socialLinks.hackerRank);
socialLinkTags[3].setAttribute('href', socialLinks.linkedin);
socialLinkTags[4].setAttribute('href', socialLinks.w3schools);
socialLinkTags[5].setAttribute('href', socialLinks.facebook);
socialLinkTags[6].setAttribute('href', socialLinks.instagram);
socialLinkTags[7].setAttribute('href', socialLinks.twitter);
socialLinkTags[8].setAttribute('href', socialLinks.youtube);
// Social media section ends

const projectLinks = {
    gameProject: "https://achyutaryaa.github.io/freeCodeCamp-gameProject",
    toDoList: "https://achyutaryaa.github.io/todo-list",
    areaCalculator: "https://achyutaryaa.github.io/calculate-triangle-area",
    tempConverter: "https://achyutaryaa.github.io/temperature-calculator"
};

