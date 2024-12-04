// import database from "better-sqlite3";
// const db = new database("database.db");

// const query = db.prepare("SELECT * FROM users WHERE name = ? AND age = ?");
// const user = query.get("Bob", 25);

// after submitting service form
const serviceBody = document.querySelector("body");

function submitServiceForm() {
    console.log("button clicked");
    serviceBody.innerHTML = "";
    serviceBody.style.backgroundColor = "green";
    const h2 = document.createElement("h2");
    h2.textContent = "You have successfully submitted service request. I will contact soon...";
    const homeBtn = document.createElement('a');
    homeBtn.id = 'home';
    homeBtn.textContent = 'Back to home';
    homeBtn.href = 'index.html';
    serviceBody.appendChild(h2);
    serviceBody.appendChild(homeBtn);
}