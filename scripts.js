document.addEventListener("DOMContentLoaded", function () {
    fetch("images.json")
        .then(response => response.json())
        .then(data => {
            let servicesList = document.getElementById("services-list");
            servicesList.innerHTML = data.services.map(img => `<li><img src="images/${img}" alt="Service"></li>`).join("");

            let projectsList = document.getElementById("projects-list");
            projectsList.innerHTML = data.projects.map(img => `<div><img src="images/${img}" alt="Project"></div>`).join("");
        });
});
