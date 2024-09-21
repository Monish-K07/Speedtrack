document.addEventListener('DOMContentLoaded', function() {
  // Event listener for the initial DOMContentLoaded event

  // Retrieve the necessary DOM elements
  var packageSizeButtons = document.querySelectorAll('.package-size-btn');
  var packageSizeMessage = document.getElementById('package-size-message');
  var nextButton = document.getElementById('next-btn');
  var categoryInput = document.getElementById('sub-category');
  var categoryPopup = document.getElementById('category-popup');
  var categoryPopupSubmitButton = document.getElementById('category-popup-submit');
  var pickupDateSelect = document.getElementById('pickup-date');
  var proceedButton = document.getElementById('proceed-btn');

  // Function to handle package size button click
  function handlePackageSizeButtonClick(event) {
    var selectedButton = event.target;
    var selectedPackageSize = selectedButton.getAttribute('data-package-size');
    var packageSizeInfo = '';

    // Display package size message based on the selected button
    switch (selectedPackageSize) {
      case 'extra-small':
        packageSizeInfo = 'Up to 500 grams';
        break;
      case 'small':
        packageSizeInfo = '500 grams to 2 Kg';
        break;
      case 'medium':
        packageSizeInfo = '2 Kg to 5 Kg';
        break;
      case 'large':
        packageSizeInfo = '5 Kg to 10 Kg';
        break;
    }

    packageSizeMessage.textContent = packageSizeInfo;

    // Remove active class from all buttons
    packageSizeButtons.forEach(function(button) {
      button.classList.remove('active');
    });

    // Add active class to the selected button
    selectedButton.classList.add('active');
  }

  // Attach event listener to each package size button
  packageSizeButtons.forEach(function(button) {
    button.addEventListener('click', handlePackageSizeButtonClick);
  });

  // Function to handle category input click
  function handleCategoryInputClick() {
    categoryPopup.style.display = 'flex';
  }


  // Function to handle category popup submit button click
  function handleCategoryPopupSubmitButtonClick() {
    var selectedCategories = [];
    var categoryCheckboxes = document.querySelectorAll('input[name="category[]"]:checked');

    // Retrieve the values of the selected categories
    categoryCheckboxes.forEach(function(checkbox) {
      selectedCategories.push(checkbox.value);
    });

    // Set the selected categories in the category input field
    categoryInput.value = selectedCategories.join(', ');

    // Hide the category popup
    categoryPopup.style.display = 'none';
  }

  // Attach event listener to the category input field
  categoryInput.addEventListener('click', handleCategoryInputClick);

  // Attach event listener to the category popup submit button
  categoryPopupSubmitButton.addEventListener('click', handleCategoryPopupSubmitButtonClick);

  // Attach event listener to the next button
  nextButton.addEventListener('click', handleNextButtonClick);

  // Function to handle next button click
  function handleNextButtonClick() {
    // Check if all required details are filled
    var isDetailsFilled = true;

    if (!document.querySelector('.package-size-btn.active')) {
      isDetailsFilled = false;
    }

    if (categoryInput.value.trim() === '') {
      isDetailsFilled = false;
    }

    if (!isDetailsFilled) {
      alert('Please fill in all the details.');
      return;
    }

    // Display available dates1
    var availableDatesContainer = document.getElementById('available-dates');
    availableDatesContainer.style.display = 'block';
    availableDatesContainer.innerHTML = '';

    var datepickerContainer = document.createElement('div');
    datepickerContainer.classList.add('datepicker');

    var heading = document.createElement('h2');
    heading.textContent = 'Select Pickup Date';

    var currentDate = new Date();
    var dateFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };

    for (var i = 0; i < 3; i++) {
      var date = new Date();
      date.setDate(currentDate.getDate() + i);

      var dateButton = document.createElement('button');
      dateButton.classList.add('btn-date');
      dateButton.textContent = date.toLocaleDateString('en-US', dateFormatOptions);

      dateButton.addEventListener('click', function() {
        // Remove 'active' class from all date buttons
        var dateButtons = document.querySelectorAll('.btn-date');
        dateButtons.forEach(function(button) {
          button.classList.remove('active');
        });

        // Add 'active' class to the clicked date button
        this.classList.add('active');
      });

      dateButton.addEventListener('click', function() {
        // ... Existing code ...

        // Add hidden input field for selected pickup date
        var selectedDate = this.textContent;
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'pickup_date';
        hiddenInput.value = selectedDate;
        document.getElementById('container').appendChild(hiddenInput);
      });

      datepickerContainer.appendChild(dateButton);
    }

    availableDatesContainer.appendChild(heading);
    availableDatesContainer.appendChild(datepickerContainer);

    // Hide the next button
    nextButton.style.display = 'none';

    // Display the proceed button
proceedButton.style.display = 'block';
availableDatesContainer.appendChild(proceedButton);

  }
  // Attach event listener to the proceed button
  proceedButton.addEventListener('click', handleProceedButtonClick);

  // Function to handle proceed button click
  function handleProceedButtonClick() 
  {
    document.addEventListener('DOMContentLoaded', function() {
      // Event listener for the initial DOMContentLoaded event
    
      // Retrieve the necessary DOM elements
      var packageSizeButtons = document.querySelectorAll('.package-size-btn');
      var packageSizeMessage = document.getElementById('package-size-message');
      var nextButton = document.getElementById('next-btn');
      var categoryInput = document.getElementById('sub-category');
      var categoryPopup = document.getElementById('category-popup');
      var categoryPopupSubmitButton = document.getElementById('category-popup-submit');
      var pickupDateSelect = document.getElementById('pickup-date');
      var proceedButton = document.getElementById('proceed-btn');
    
      // Function to handle package size button click
      function handlePackageSizeButtonClick(event) {
        var selectedButton = event.target;
        var selectedPackageSize = selectedButton.getAttribute('data-package-size');
        var packageSizeInfo = '';
    
        // Display package size message based on the selected button
        switch (selectedPackageSize) {
          case 'extra-small':
            packageSizeInfo = 'Up to 500 grams';
            break;
          case 'small':
            packageSizeInfo = '500 grams to 2 Kg';
            break;
          case 'medium':
            packageSizeInfo = '2 Kg to 5 Kg';
            break;
          case 'large':
            packageSizeInfo = '5 Kg to 10 Kg';
            break;
        }
    
        packageSizeMessage.textContent = packageSizeInfo;
    
        // Remove active class from all buttons
        packageSizeButtons.forEach(function(button) {
          button.classList.remove('active');
        });
    
        // Add active class to the selected button
        selectedButton.classList.add('active');
      }
    
      // Attach event listener to each package size button
      packageSizeButtons.forEach(function(button) {
        button.addEventListener('click', handlePackageSizeButtonClick);
      });
    
      // Function to handle category input click
      function handleCategoryInputClick() {
        categoryPopup.style.display = 'flex';
      }
    
      // Function to handle category popup submit button click
      function handleCategoryPopupSubmitButtonClick() {
        var selectedCategories = [];
        var categoryCheckboxes = document.querySelectorAll('input[name="category[]"]:checked');
    
        // Retrieve the values of the selected categories
        categoryCheckboxes.forEach(function(checkbox) {
          selectedCategories.push(checkbox.value);
        });
    
        // Set the selected categories in the category input field
        categoryInput.value = selectedCategories.join(', ');
    
        // Hide the category popup
        categoryPopup.style.display = 'none';
      }
    
      // Attach event listener to the category input field
      categoryInput.addEventListener('click', handleCategoryInputClick);
    
      // Attach event listener to the category popup submit button
      categoryPopupSubmitButton.addEventListener('click', handleCategoryPopupSubmitButtonClick);
    
       // Attach event listener to the next button
       nextButton.addEventListener('click', handleNextButtonClick);
       
      // Function to handle next button click
      function handleNextButtonClick() {
        // Check if all required details are filled
        var isDetailsFilled = true;
    
        if (!document.querySelector('.package-size-btn.active')) {
          isDetailsFilled = false;
        }
    
        if (categoryInput.value.trim() === '') {
          isDetailsFilled = false;
        }
    
        if (!isDetailsFilled) {
          alert('Please fill in all the details.');
          return;
        }
    
        // Display available dates1
        var availableDatesContainer = document.getElementById('available-dates');
        availableDatesContainer.style.display = 'block';
        availableDatesContainer.innerHTML = '';
    
        var datepickerContainer = document.createElement('div');
        datepickerContainer.classList.add('datepicker');
    
        var heading = document.createElement('h2');
        heading.textContent = 'Select Pickup Date';
    
        var currentDate = new Date();
        var dateFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
    
        for (var i = 0; i < 3; i++) {
          var date = new Date();
          date.setDate(currentDate.getDate() + i);
    
          var dateButton = document.createElement('button');
          dateButton.classList.add('btn-date');
          dateButton.textContent = date.toLocaleDateString('en-US', dateFormatOptions);
    
          dateButton.addEventListener('click', function() {
            // Remove 'active' class from all date buttons
            var dateButtons = document.querySelectorAll('.btn-date');
            dateButtons.forEach(function(button) {
              button.classList.remove('active');
            });
    
            // Add 'active' class to the clicked date button
            this.classList.add('active');
          });
    
          datepickerContainer.appendChild(dateButton);
        }
    
        availableDatesContainer.appendChild(heading);
        availableDatesContainer.appendChild(datepickerContainer);
    
        // Hide the next button
        nextButton.style.display = 'none';
    
        // Display the proceed button
        proceedButton.style.display = 'block';
      }
    
     
    });

    // Hide the left section, available dates, and proceed button
    document.querySelector('.left-section').style.display = 'none';
    document.querySelector('#available-dates').style.display = 'none';
    document.querySelector('#proceed-btn').style.display = 'none';

    // Show the order summary section
    document.querySelector('#order-summary').style.display = 'block';

    // Add the active class to the current sequence item
    document.querySelector('.current-sequence').classList.remove('current-sequence');
    document.querySelectorAll('.sequence-item')[2].classList.add('current-sequence');

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Get the required values from the form
    var country = document.getElementById('country').value;
    var pickupPincode = document.getElementById('pickup-pincode').value;
    var deliveryPincode = document.getElementById('delivery-pincode').value;
    var pickupAddress = document.getElementById('pickup-address').value;
    var deliveryAddress = document.getElementById('delivery-address').value;
    var mobileNumber = document.getElementById('mobile-number').value;
    var category = categoryInput.value; // Use categoryInput.value instead of categoryInput.getAttribute('value')
    var packageValue = document.getElementById('package-value').value;

    //Calculate courier charges based on package size
    var courierCharges = calculateCourierCharges(packageSize);

    // Calculate shipping charges based on distance
    var distance = calculateDistance(pickupPincode, deliveryPincode);
    var shippingCharges = calculateShippingCharges(distance);

    // Calculate total payment
    var totalPayment = courierCharges + shippingCharges;

    //Update the order summary overlay with the obtained values
    document.getElementById('order-summary-country').textContent = country;
    document.getElementById('order-summary-pickup-pincode').textContent = pickupPincode;
    document.getElementById('order-summary-delivery-pincode').textContent = deliveryPincode;
    document.getElementById('order-summary-pickup-address').textContent = pickupAddress;
    document.getElementById('order-summary-delivery-address').textContent = deliveryAddress;
    document.getElementById('order-summary-mobile-number').textContent = mobileNumber;
    document.getElementById('order-summary-package-size').textContent = packageSize;
    document.getElementById('order-summary-category').textContent = category;
    document.getElementById('order-summary-package-value').textContent = packageValue;
    document.getElementById('order-summary-pickup-date').textContent = pickupDate;
    document.getElementById('order-summary-courier-charges').textContent = courierCharges;
    document.getElementById('order-summary-shipping-charges').textContent = shippingCharges;
    document.getElementById('order-summary-total-payment').textContent = totalPayment;
  }

  

  // Function to calculate courier charges based on package size
  function calculateCourierCharges(packageSize) {
    var courierCharges = 0;

    switch (packageSize) {
      case 'extra-small':
        courierCharges = 5; // Example: $5 for extra small package
        break;
      case 'small':
        courierCharges = 8; // Example: $8 for small package
        break;
      case 'medium':
        courierCharges = 12; // Example: $12 for medium package
        break;
      case 'large':
        courierCharges = 15; // Example: $15 for large package
        break;
    }

    return courierCharges;
  }

  // Function to calculate shipping charges based on distance
  function calculateShippingCharges(distance) {
    // Example calculation: $1 per kilometer
    var shippingRate = 1;
    var shippingCharges = distance * shippingRate;

    return shippingCharges;
  }

  // Function to calculate distance between pickup and delivery locations (using pin codes)
  function calculateDistance(pickupPincode, deliveryPincode) {
    // Example calculation: Assume 1 km per difference in the last digit of pin codes
    var pickupLastDigit = parseInt(pickupPincode[pickupPincode.length - 1]);
    var deliveryLastDigit = parseInt(deliveryPincode[deliveryPincode.length - 1]);
    var distance = Math.abs(pickupLastDigit - deliveryLastDigit);

    return distance;
  }
});

   


// Function to handle confirm payment button click
function handleConfirmPaymentButtonClick() {
  window.location.href = 'payment.html';
}

// Attach event listener to the confirm payment button
var confirmPaymentButton = document.getElementById('confirm-payment-btn');
confirmPaymentButton.addEventListener('click', handleConfirmPaymentButtonClick);
;
