//grabbing the root selector with the document.documentElement to access the :root selector
let grabRootSelector = document.documentElement;

//these are the functions that change the color of the borders, background and font for the Dark theme
function toDarkTheme(){
    grabRootSelector.style.setProperty('--background-color', '#272727');
    grabRootSelector.style.setProperty('--font-color', '#e9e9e9');
    grabRootSelector.style.setProperty('--border-color', '#e9e9e9');
}

function toLightTheme(){
    grabRootSelector.style.setProperty('--background-color', '#ffffff');
    grabRootSelector.style.setProperty('--font-color', '#000000');
    grabRootSelector.style.setProperty('--border-color', '#000000');
}


//control flow that allows me to change the themes in my page
//it checks what option the user selected and then applies the proper function
//i'm adding the option variable within the function (i'm not sure why it need it to be local)
function changeThemes(){
    let option = document.getElementById('theme-dropdown').value;
    if(option === "light") {
        toLightTheme();
    } else if (option === "dark") {
        toDarkTheme();
    }
}

//event listener that listens for the change within the select dropdown, calling the function changeThemes;
let changeEvent = document.getElementById('theme-dropdown').addEventListener('change', changeThemes);

/*------------------------------------------------------------ */


//