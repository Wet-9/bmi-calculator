
// Get variable for weight and height
// Parseint or adding + will change the element to a number
function calculateBMI() {
    var weight = +document.getElementById("weight").value;
    var height = +document.getElementById("height").value;
    var bmi = weight / (height * height);
    var bmitype = null;
    if (bmi < 18.5) {
      bmitype = "Under Weight";
      bmiimage("underweight-img");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmitype = "Normal Weight";
      bmiimage("normalweight-img");
    } else if (bmi >= 24.9 && bmi < 29.9) {
      bmitype = "Overweight";
      bmiimage("overweight-img");
    } else {
      bmitype = "Obese";
      bmiimage("obese-img");
    }
  
    document.getElementById("results").innerText = "Your BMI: " + bmi.toFixed(2) + " (" + bmitype + ")";
  }
  
  // Function for displaying Img.
  function bmiimage(xId) {
    // Get all images with the class "bmi-images"
    var images = document.querySelectorAll(".bmi-images img");
  
    // We hide all images first in a loop 
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
  
    // After running loop to hide, it will grab xid from bmi calculator and display corresponding image
    var imageToShow = document.getElementById(xId);
    if (imageToShow) {
      imageToShow.style.display = "block";
    }
  }
  
  
  // Reset button
  function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("results").innerText = "";
  
    // Hide all images when the form is reset
    var images = document.querySelectorAll(".bmi-images img");
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
  }
  