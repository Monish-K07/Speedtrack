document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");
    const trackOrderInput = document.getElementById("track-order-input");
    const trackOrderDisplay = document.getElementById("track-order-display");
    const copyButton = document.getElementById("copy-button");
    const trackOrderButton = document.getElementById("track-order-button");
  
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      // Generate a random track order number (for demonstration purposes)
      const trackOrderNumber = generateTrackOrderNumber();
  
      // Show the track order number and hide the submit button
      trackOrderDisplay.style.display = "block";
      trackOrderInput.value = trackOrderNumber;
      submitButton.style.display = "none";
    });
  
    copyButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      // Copy the track order number to the clipboard
      trackOrderInput.select();
      document.execCommand("copy");
  
      // Update the copy button text and disable it
      copyButton.innerText = "Copied to Clipboard";
      copyButton.disabled = true;
  
      // Show the "Track Your Order" button
      trackOrderButton.style.display = "inline-block";
    });
  
    // Function to generate a random track order number
    function generateTrackOrderNumber() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let trackOrderNumber = "";
  
      for (let i = 0; i < 10; i++) {
        trackOrderNumber += characters.charAt(Math.floor(Math.random() * characters.length));
      }
  
      return trackOrderNumber;
    }
    document.getElementById('track-order-button').addEventListener("click", function() {
        window.location.href = "index.html";
      });
  });