const toggleContactBtn = document.getElementById("toggleContactBtn");
const contactList = document.getElementById("contactList");

const addSkillBtn = document.getElementById("addSkillBtn");
const skillInput = document.getElementById("skillInput");
const skillsList = document.getElementById("skillsList");
const skillsCount = document.getElementById("skillsCount");

const themeToggleBtn = document.getElementById("themeToggleBtn");
const pageBody = document.getElementById("pageBody");

const changeTextBtn = document.getElementById("changeTextBtn");
const aboutText = document.getElementById("aboutText");

const highlightProjectBtn = document.getElementById("highlightProjectBtn");
const mainProject = document.getElementById("mainProject");


toggleContactBtn.addEventListener("click", function () {
    if (contactList.style.display === "none") {
        contactList.style.display = "block";
        toggleContactBtn.textContent = "Hide";
    } else {
        contactList.style.display = "none";
        toggleContactBtn.textContent = "Show";
    }
});


addSkillBtn.addEventListener("click", function () {
    const newSkill = skillInput.value.trim();

    if (newSkill === "") {
        alert("Please enter a skill.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = newSkill;
    skillsList.appendChild(li);

    skillInput.value = "";
    updateSkillsCount();
});


function updateSkillsCount() {
    const allSkills = skillsList.querySelectorAll("li");
    skillsCount.textContent = allSkills.length;
}

updateSkillsCount();


themeToggleBtn.addEventListener("click", function () {
    pageBody.classList.toggle("dark-theme");
});


changeTextBtn.addEventListener("click", function () {
    aboutText.textContent = "Ich bin eine engagierte Studentin, die moderne Technologien lernt und reale Projekte entwickelt.";
});


highlightProjectBtn.addEventListener("click", function () {
    mainProject.classList.toggle("highlighted");
});