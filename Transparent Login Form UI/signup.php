<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Validate form data (you can add more validation if needed)
  if (empty($username) || empty($email) || empty($password)) {
    // Handle validation error
    echo "Please fill in all the fields.";
  } else {
    // Database connection
    $conn = mysqli_connect('localhost', 'root', '', 'speedtrack');

    // Check if the connection is successful
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL statement
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";

    // Execute the SQL statement
    if (mysqli_query($conn, $sql)) {
      // Redirect to login.html
      header("Location: login.html");
      exit;
    } else {
      // Handle database error
      echo "Error: " . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
  }
}
?>