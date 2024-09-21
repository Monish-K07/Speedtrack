<?php
session_start();

// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "speedtrack";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to validate pincode
function validatePincode($pincode) {
    // Check if the pincode is exactly 6 digits
    if (preg_match('/^\d{6}$/', $pincode)) {
        return true;
    }
    return false;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $country = $_POST['country'];
    $pickupPincode = $_POST['pickup-pincode'];
    $deliveryPincode = $_POST['delivery-pincode'];

    // Validate the pickup pincode
    if (!validatePincode($pickupPincode)) {
        die("Invalid pickup pincode");
    }

    // Validate the delivery pincode
    if (!validatePincode($deliveryPincode)) {
        die("Invalid delivery pincode");
    }

    // Prepare and execute the SQL query to insert the consignment details into the database
    $sql = "INSERT INTO consignments (country, pickup_pincode, delivery_pincode) VALUES ('$country', '$pickupPincode', '$deliveryPincode')";

    if ($conn->query($sql) === TRUE) {
        // Store the entered data in session variables
        $_SESSION['country'] = $country;
        $_SESSION['pickup_pincode'] = $pickupPincode;
        $_SESSION['delivery_pincode'] = $deliveryPincode;
        
        // Send a response back to the JavaScript code
        echo "Consignment details stored successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>