// JavaScript for carousel functionality
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-container img");
  
    setInterval(() => {
      // Hide the current image
      images[currentIndex].classList.remove("active");
  
      // Move to the next image
      currentIndex = (currentIndex + 1) % images.length;
  
      // Show the next image
      images[currentIndex].classList.add("active");
    }, 3000); // Change image every 3 seconds
  });
  