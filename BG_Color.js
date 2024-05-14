
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



// div colour
  function changeBarColor() {
    // Array of high contrast light colors
    const lightColors = ['#ffffff', '#f5f5f5', '#f0f0f0', '#fafafa', '#fcfcfc', '#fefefe', '#fbfbfb'];
  
    // Get a random index from the lightColors array
    const randomIndex = Math.floor(Math.random() * lightColors.length);
  
    // Get the div element
    // const div = document.getElementById('changeDiv');
  
    // Set the background color of the div to the randomly selected light color
    main.style.color = lightColors[randomIndex];
  }
  
  // Add event listener to the button
  const bar_button = document.getElementById('changeBarColor');
  bar_button.addEventListener('click', ()=>
{
    console.log("inside bar color chnage function");
    changeBarColor();
});
  
  