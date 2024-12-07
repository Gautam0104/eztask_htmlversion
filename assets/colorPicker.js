

// Get all color boxes and text element
const colorBoxes = document.querySelectorAll('.color-box');
const textDisplay = document.getElementById("swiper-with-pagination-cards");
const para = document.querySelectorAll('.themeSwitch');
const sideMenubutton = document.querySelectorAll('.menuSwitch');
const activeBtn = document.querySelector('.activebtn');
const acBtn = document.querySelector('.acbuttton');

// Add click event to each color box
colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const bgcolor = box.dataset.bgcolor; // Get the color from data attribute
        const color = box.dataset.color; // Get the color from data attribute
        textDisplay.style.backgroundColor = bgcolor; // Change text color
        para.forEach(paraItem => {
            paraItem.style.backgroundColor = color;
        })
        sideMenubutton.forEach(menuItem => {
            menuItem.style.color = bgcolor
        });
        acBtn.classList.remove('active');
        activeBtn.style.backgroundColor = bgcolor;
        activeBtn.style.color = '#fff';
    });

});