
function changeDivBackgroundColor() {
    // Array of dark colors
    const darkColors = ['#7f8c8d', '#16a085', '#2e3b32', '#a0baa7', '#7b94bd', '#bcd3f7', '#052861', '#57420a','#f2e9e4'];
  
    // Get a random index from the darkColors array
    const randomIndex = Math.floor(Math.random() * darkColors.length);
  

  
    // Set the background color of the div to the randomly selected dark color
    main.style.backgroundColor = darkColors[randomIndex];
  }
  
  // Add event listener to the button
  const button = document.getElementById('changeButton');
  button.addEventListener('click', changeDivBackgroundColor);




  
