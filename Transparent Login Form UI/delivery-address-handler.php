<?php
// Print the $_POST array for debugging
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve the delivery address data
  $deliveryName = $_POST["delivery_name"];
  $deliveryPhone = $_POST["delivery_phone"];
  $deliveryEmail = $_POST["delivery_email"];
  $deliveryFlatHousing = $_POST["delivery_flat_housing"];
  $deliveryAreaStreet = $_POST["delivery_area_street"];
  $deliveryPincode = $_POST["delivery_pincode"];
  $deliveryCity = $_POST["delivery_city"];
  $deliveryState = $_POST["delivery_state"];

  // Store the delivery address data in the database
  $deliveryConnection = mysqli_connect("localhost", "root", "", "speedtrack");
  if (!$deliveryConnection) {
    die("Delivery database connection failed: " . mysqli_connect_error());
  }

  $deliveryQuery = "INSERT INTO delivery_addresses (contact_name, mobile_number, email_address, flat_housing, area_street, pincode, city, state)
                    VALUES ('$deliveryName', '$deliveryPhone', '$deliveryEmail', '$deliveryFlatHousing', '$deliveryAreaStreet', '$deliveryPincode', '$deliveryCity', '$deliveryState')";
  if (!mysqli_query($deliveryConnection, $deliveryQuery)) {
    die("Error storing delivery address data: " . mysqli_error($deliveryConnection));
  }

  mysqli_close($deliveryConnection);

  // Redirect to the next page
//   header("Location: package.html");
//   exit();
}
?>
