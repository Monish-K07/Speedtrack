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
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Courier Management System</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <nav>
      <img src="loginbg.jpeg" alt="Logo" class="logo">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#track-order">Track Order</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#own-team">Our Team</a></li>
        <li><a href="Transparent Login Form UI/login.html">User Login</a></li>
        <li><a href="#" id="admin-link">Admin Login</a>
          <ul id="admin-menu">
            <li><a href="Transparent Login Form UI/emploeelogin.html">Employee</a></li>
            <li><a href="Transparent Login Form UI/superadminlogin.html">Super Admin</a></li>
          </ul>
      </ul>
    </nav>
    <!-- Rest of the HTML code -->
    <script>
      // JavaScript code to make the submenu clickable
      var adminLink = document.getElementById('admin-link');
      var adminMenu = document.getElementById('admin-menu');

      adminLink.addEventListener('click', function () {
        adminMenu.style.display = adminMenu.style.display === 'block' ? 'none' : 'block';
      });
    </script>
    <section id="home">
      <header>
        <h1>Courier Management System</h1>
        <p>Fast, Secure and Reliable Courier Services</p>
        <button><a href="Transparent Login Form UI/signup.html" style="text-decoration: none; color: white;" > Get Started</a></button>
      </header>
    </section>
    <section id="services">
      <h2 >Our Services</h2>
      <div class="row">
      <div class="service">
        <img src="domestic.jpg" alt="Service 1" style="width:50%">
        <h3>Domestic Courier Services</h3>
        <p>We offer fast and reliable domestic courier services, ensuring your packages are delivered on time, every time.</p>
      </div>
      <div class="service">
        <img src="international.jpg" alt="Service 2" style="width:50%">
        <h3>International Courier Services</h3>
        <p>Our international courier services allow you to send packages to over 200 countries worldwide with ease.</p>
      </div>
    </section>
    <section id="track-order">
      <div>
        <img src="tracking.jpg" alt="Track Your Order" style="float: right; margin: top -400px; margin-right: 100px; margin-top: -30px;">
      </div>
      <div class="container">
        <div class="row">
          <div>
            <h2 style="margin-left: 20px;">Track Your Order</h2>
            <pre>    Order tracking is a process of monitoring and tracking orders placed online and delivering 
    real-time order status updates to customers.

    It helps customers learn

    where exactly their order is
    when they should expect it to arrive
    and whether there has been a delay.</pre>
      <section id="about">
        <h2>About Us</h2>
        <p>We are a team of passionate individuals dedicated to creating high-quality products and providing excellent customer service. Our goal is to make your shopping experience enjoyable and hassle-free.</p>
        <div>
          <img src="aboutimg.jpg" style="float: right; margin-right: 200px; margin-top: 50px; width: 800px; height: 400px;"  alt="about image">
        </div>
        <h3>Our Mission</h3>
        <ul>
          <li>To provide the best possible customer service</li>
          <li>To create innovative and high-quality products</li>
          <li>To continuously improve and evolve our business</li>
        </ul>
        <h3>Our Values</h3>
        <ul>
          <li>Integrity</li>
          <li>Quality</li>
          <li>Innovation</li>
          <li>Customer satisfaction</li>
        </ul>
        <h3>Our Team</h3>
        <p>Meet the people who make it all possible:</p>
        <ul>
          <li>John Doe - CEO</li>
          <li>Jane Smith - Marketing Director</li>
          <li>Tom Johnson - Head of Product Development</li>
          <li>Sara Lee - Customer Service Manager</li>
        </ul>
      </section>
      <section id="contact">
        <div class="contact-container">
          <div class="contact-info">
            <h2>Contact Us</h2>
            <form action="#">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message here" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
          <div class="contact-image">
            <img src="contactusimage.jpg" alt="Contact Image">
          </div>
        </div>
        <div class="contact-details">
          <p>If you have any questions or concerns, please don't hesitate to contact us:</p>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: 555-1234</li>
            <li>Address: 123 Main Street, Anytown USA</li>
          </ul>
        </div>
      </section>
  <section id="own-team" ><h2 style="text-align: center;">Our Team</h2>
  <section id="services">
    <div class="row">
    <div class="service">
      <img src="member1.jpg" alt="Service 1" width="300px" height="250px">
      <h3>Monish</h3>
      <p>CEO</p>
    </div>
    <div class="service">
      <img src="member2.jpg" alt="Service 2">
      <h3>Monish</h3>
      <p>Founder</p>
    </div>
    <div class="service">
      <img src="member3.jpg" alt="Service 3" width="300px" height="250px">
      <h3>Monish</h3>
      <p>Organiser</p>
    </div>
  </section>
  </section>
  <footer>
    <p>&copy; 2023 Courier Management System. All rights reserved.</p>
  </footer>
  </body>
  </html>