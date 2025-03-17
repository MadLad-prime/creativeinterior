<?php
header("Content-Type: application/json"); // Ensure JSON output

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["message" => "Invalid request method"]);
    exit;
}

$category = $_POST['category'] ?? null;
$file = $_FILES['image'] ?? null;

if (!$category || !$file) {
    echo json_encode(["message" => "Missing required fields"]);
    exit;
}

if ($file['error']) {
    echo json_encode(["message" => "File upload error"]);
    exit;
}

$target_dir = "images/";
$filename = time() . "_" . basename($file["name"]);
$target_file = $target_dir . $filename;

if (move_uploaded_file($file["tmp_name"], $target_file)) {
    $json_file = "images.json";
    $data = json_decode(file_get_contents($json_file), true);
    $data[$category][] = $filename;
    file_put_contents($json_file, json_encode($data, JSON_PRETTY_PRINT));
    echo json_encode(["message" => "Image uploaded successfully!", "file" => $filename]);
} else {
    echo json_encode(["message" => "Upload failed"]);
}
?>
