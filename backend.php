<?php
$servername = "localhost";
$username = "root"; // The default username for XAMPP is "root"
$password = ""; // The default password for XAMPP is blank
$dbname = "speedtrack"; // Replace "your_database_name" with your desired database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected to MySQL successfully";

// Perform your database operations here

$conn->close(); // Close the database connection
?>