<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Database connection
  $conn = mysqli_connect('localhost', 'root', '', 'speedtrack');

  // Check if the connection is successful
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Prepare the SQL statement
  $username = mysqli_real_escape_string($conn, $username);
  $sql = "SELECT * FROM users WHERE username = '$username'";

  // Execute the SQL statement
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) > 0) {
    // Fetch the user data from the result
    $row = mysqli_fetch_assoc($result);
    $hashedPassword = $row['password'];

    // Verify the entered password against the hashed password
    if (password_verify($password, $hashedPassword)) {
      // Password is correct, proceed with login
      // Redirect to the desired page after successful login
      header("Location: another-page.html");
      exit;
    } else {
      // Password is incorrect
      echo "Incorrect username or password.";
    }
  } else {
    // User not found
    echo "Incorrect username or password.";
  }

  // Close the database connection
  mysqli_close($conn);
}
?>