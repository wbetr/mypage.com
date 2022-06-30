//###This script changes all h1 elements context and changes it to whatever to specify
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Obito Uchiha';

//####This script listens for clicks anywhere within the html element, and once a click is heard it displays a message
// document.querySelector('html').addEventListener('click', function() {
//     alert('click!');
// });

//###The following script adds an event listener that listens for clicks on all img elements and switches images once the click is heard
let myImage = document.querySelector('img'); //use myImage as a variable for the img element 
myImage.onclick = function() { //when the image element is clicked, run the following function 
    let mySrc = myImage.getAttribute('src'); //set mySrc as a variable for the source attribute in my img element
    if (mySrc === 'images/obito.png') { //if the src attribute is exactly equal to the following string...
        myImage.setAttribute('src', 'images/obithree.png'); //..then change the src to the the following path...
        myImage.setAttribute('style', 'width: 200px; lenght: 200px;'); //...and the style attribute to the following values
    } else if (mySrc === 'images/obithree.png') {
        myImage.setAttribute('src', 'images/obito4.gif');
        myImage.setAttribute('style', 'width: 200px; lenght: 200px');
        const myHeading = document.querySelector('h1');
        myHeading.textContent = 'GOTCHA!!!';
    }
     else { //If the src attribute isn't exactly equal to the original path...
        const myHeading = document.querySelector('h1');
        myHeading.textContent = 'Main Title';
        myImage.setAttribute('src', 'images/obito.png')
        myImage.setAttribute('style', 'width: ; lenght: ;'); //...then simply leave it as it is 
    } //test: write multiple if statements within the function in order to add more images that you can click through
}
//The script Below allows users to enter a name and display it next to the main heading
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
// function setUserName() {
//     let myName = prompt('Enter Name.');
//     if(!myName) {
//         setUserName();
//     } else {localStorage.setItem('name', myName);
//     myHeading.textContent = 'Main Title, ' + myName;
//     }
// }
// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Main Title ' + ',' + storedName;
// }
// myButton.onclick = function() {
//     setUserName();
// }