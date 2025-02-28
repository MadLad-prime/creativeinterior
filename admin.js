const password = "admin123"; // Change this for security

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (document.getElementById("password").value === password) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        alert("Incorrect Password");
    }
});

document.getElementById("upload-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("category", document.getElementById("category").value);
    formData.append("image", document.getElementById("imageFile").files[0]);

    fetch("upload.php", { method: "POST", body: formData })
        .then(response => response.json())
        .then(data => alert(data.message));
});
