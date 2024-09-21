<?php
// Print the $_POST array for debugging
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Check if form is submitted
if (isset($_POST['submit'])) {
  // Retrieve the pickup address data
  $pickupName = $_POST["pickup_name"];
  $pickupPhone = $_POST["pickup_phone"];
  $pickupEmail = $_POST["pickup_email"];
  $pickupFlatHousing = $_POST["pickup_flat_housing"];
  $pickupAreaStreet = $_POST["pickup_area_street"];
  $pickupPincode = $_POST["pickup_pincode"];
  $pickupCity = $_POST["pickup_city"];
  $pickupState = $_POST["pickup_state"];


  // Store the pickup address data in the database
  $pickupConnection = mysqli_connect("localhost", "root", "", "speedtrack");
  if (!$pickupConnection) {
    die("Pickup database connection failed: " . mysqli_connect_error());
  }

  $pickupQuery = "INSERT INTO pickup_addresses (contact_name, mobile_number, email_address, flat_housing, area_street, pincode, city, state)
                  VALUES ('$pickupName', '$pickupPhone', '$pickupEmail', '$pickupFlatHousing', '$pickupAreaStreet', '$pickupPincode', '$pickupCity', '$pickupState')";
  if (!mysqli_query($pickupConnection, $pickupQuery)) {
    die("Error storing pickup address data: " . mysqli_error($pickupConnection));
  }

  mysqli_close($pickupConnection);

  // Redirect to the next page
  header("Location: address-page.html");
  exit();
}
?>
