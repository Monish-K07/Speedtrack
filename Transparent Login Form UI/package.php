<?php
// Retrieve form data
$packageSize = $_POST['package_size'];
$packageCategory = $_POST['package_category'];
// Convert the array to a comma-separated string
$packageCategoryString = implode(', ', $packageCategory);

$packageValue = $_POST['package_value'];
$packagePickupDate = $_POST['package_pickup_date'];

// Create a new MySQLi instance
$mysqli = new mysqli("localhost", "root", "", "speedtrack");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Prepare the SQL statement
$stmt = $mysqli->prepare("INSERT INTO package (package_size, package_category, package_value, package_pickup_date) VALUES (?, ?, ?, ?)");

// Bind the parameters
$stmt->bind_param("ssis", $packageSize, $packageCategoryString, $packageValue, $packagePickupDate);

// Execute the statement
if ($stmt->execute()) {
    echo "Data stored successfully.";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$mysqli->close();
?>
