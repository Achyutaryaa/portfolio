import database from "better-sqlite3";
const db = new database("database.db");

const query = db.prepare("SELECT * FROM users WHERE name = ? AND age = ?");
const user = query.get("Bob", 25);

// after submitting service form

function submitServiceForm() {
    console.log("button clicked");
    const serviceBody = document.querySelector("body");
    serviceBody.innerHTML = "";
    serviceBody.style.backgroundColor = "green";
    const h2 = document.createElement("h2");
    h2.textContent = "You have successfully submitted service request. I will contact soon...";
    serviceBody.appendChild(h2);
}