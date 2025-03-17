document.getElementById("upload-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("category", document.getElementById("category").value);
    formData.append("image", document.getElementById("imageFile").files[0]);

    fetch("upload.php", { method: "POST", body: formData })
        .then(response => response.text()) // Change from .json() to .text() to debug
        .then(data => {
            try {
                let json = JSON.parse(data);
                alert(json.message);
            } catch (error) {
                console.error("Error parsing JSON:", data);
                alert("Server error. Check console.");
            }
        })
        .catch(error => console.error("Fetch error:", error));
});
