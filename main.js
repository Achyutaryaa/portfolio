
// name section starts
const nameList = ["Achyutarya Raaz", "अच्युतआर्य राज़"];

const nameField = document.querySelector(".name");
nameField.innerHTML = nameList[1];
// name section ends

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

