const themeMode = localStorage.getItem('templateCustomizer-vertical-menu-template--Style')

function colorPicker() {
    localStorage.setItem('colorMode', 'success')
    if (themeMode === 'dark') {
        localStorage.setItem('href', '../custom_colorpicker/success-color-dark.css')
        location.reload();
    } else {
        localStorage.setItem('href', '../custom_colorpicker/success-color.css')
        location.reload();
    }





}
function colorPickerPrimary() {

    localStorage.setItem('colorMode', 'primary')
    if (themeMode === 'dark') {
        localStorage.setItem('href', '../custom_colorpicker/primary-color-dark.css')
        location.reload();
    } else {
        localStorage.setItem('href', '../custom_colorpicker/primary-color.css')
        location.reload();
    }




}
function colorPickerWarning() {
    localStorage.setItem('colorMode', 'warning')
    if (themeMode === 'dark') {
        localStorage.setItem('href', '../custom_colorpicker/warning-color-dark.css')
        location.reload();
    } else {
        localStorage.setItem('href', '../custom_colorpicker/warning-color.css')
        location.reload();
    }


}
function colorPickerSecondary() {
    localStorage.setItem('colorMode', 'secondary')
    if (themeMode === 'dark') {
        localStorage.setItem('href', '../custom_colorpicker/secondary-color-dark.css')
        location.reload();
    } else {
        localStorage.setItem('href', '../custom_colorpicker/secondary-color.css')
        location.reload();
    }


}
function colorPickerDanger() {
    localStorage.setItem('colorMode', 'danger')
    if (themeMode === 'dark') {
        localStorage.setItem('href', '../custom_colorpicker/danger-color-dark.css')
        location.reload();
    } else {
        localStorage.setItem('href', '../custom_colorpicker/danger-color.css')
        location.reload();
    }


}
// Retrieve and display data
const storedUsername = localStorage.getItem('href');
console.log(`href: ${storedUsername}`);
const colorLink = document.getElementById('cLink').href = storedUsername;
console.log(colorLink);
