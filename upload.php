<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $valid_password = "admin123"; // Secure this in a real application
    $category = $_POST['category'];
    $file = $_FILES['image'];

    if (!$file['error']) {
        $target_dir = "images/";
        $filename = time() . "_" . basename($file["name"]);
        $target_file = $target_dir . $filename;

        if (move_uploaded_file($file["tmp_name"], $target_file)) {
            $json_file = "images.json";
            $data = json_decode(file_get_contents($json_file), true);
            $data[$category][] = $target_file;
            file_put_contents($json_file, json_encode($data, JSON_PRETTY_PRINT));
            echo json_encode(["message" => "Image uploaded successfully!"]);
        } else {
            echo json_encode(["message" => "Upload failed"]);
        }
    } else {
        echo json_encode(["message" => "Error uploading file"]);
    }
}
?>
