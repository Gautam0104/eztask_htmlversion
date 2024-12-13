
function colorPicker() {

    // Store data
    localStorage.setItem('href', '../custom_colorpicker/success-color.css');
    window.location.reload();



}
function colorPickerPrimary() {

    // Store data
    localStorage.setItem('href', '../custom_colorpicker/primary-color.css');

    window.location.reload();



}
function colorPickerWarning() {
    // Store data
    localStorage.setItem('href', '../custom_colorpicker/warning-color.css');

    window.location.reload();

}
function colorPickerSecondary() {
    // Store data
    localStorage.setItem('href', '../custom_colorpicker/secondary-color.css');

    window.location.reload();

}
function colorPickerDanger() {
    // Store data
    localStorage.setItem('href', '../custom_colorpicker/danger-color.css');

    window.location.reload();

}
// Retrieve and display data
const storedUsername = localStorage.getItem('href');
console.log(`href: ${storedUsername}`);
const colorLink = document.getElementById('cLink').href = storedUsername;
console.log(colorLink);
