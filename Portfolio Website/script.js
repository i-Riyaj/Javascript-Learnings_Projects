const switchTheme = document.querySelector('#switchTheme');
const navigationList = document.querySelector('#navigationList');

// dropdown menu
const openNavigationList = () => {
    if(navigationList.classList.contains('displayNone')){
        navigationList.classList.remove('displayNone');
        navigationList.classList.add('navUlLists');
    }
    else if(navigationList.classList.contains('navUlLists')){
        navigationList.classList.remove('navUlLists');
        navigationList.classList.add('displayNone');
    }
};

// saving theme info in localStorage
const darkModeWebKate = localStorage.getItem('darkModeWebKate');
if(darkModeWebKate == 'darkMode'){
    document.documentElement.style.setProperty('--bgColor', '#edf2fc');
    document.documentElement.style.setProperty('--textColor', '#black');
    document.documentElement.style.setProperty('--sTextcolor', '#000000');
    document.documentElement.style.setProperty('--btnBgColor', '#C996CC');
    switchTheme.classList.remove('theme-light');
    switchTheme.classList.add('theme-dark');
    switchTheme.innerHTML = 
    `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>

    `;      
}
else if(darkModeWebKate == 'lightMode'){
    document.documentElement.style.setProperty('--bgColor', '#030637');
    document.documentElement.style.setProperty('--textColor', '#892CDC');
    document.documentElement.style.setProperty('--sTextcolor', '#fff');
    document.documentElement.style.setProperty('--btnBgColor', '#3D2C8D');
    switchTheme.classList.remove('theme-dark');
    switchTheme.classList.add('theme-light');
    switchTheme.innerHTML = 
    `
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
       </svg>

    `;
}

// change Theme
const changeTheme = () => {
    // dark to light
    if(switchTheme.classList.contains('theme-dark')){
        document.documentElement.style.setProperty('--bgColor', '#030637');
        document.documentElement.style.setProperty('--textColor', '#892CDC');
        document.documentElement.style.setProperty('--sTextcolor', '#fff');
        document.documentElement.style.setProperty('--btnBgColor', '#3D2C8D');
        switchTheme.classList.remove('theme-dark');
        switchTheme.classList.add('theme-light');
        switchTheme.innerHTML = 
        `
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
           </svg>

        `;
        localStorage.setItem('darkModeWebKate', 'lightMode');
    }

    // light to dark
    else if(switchTheme.classList.contains('theme-light')){
        document.documentElement.style.setProperty('--bgColor', '#edf2fc');
        document.documentElement.style.setProperty('--textColor', '#black');
        document.documentElement.style.setProperty('--sTextcolor', '#000000');
        document.documentElement.style.setProperty('--btnBgColor', '#C996CC');
        switchTheme.classList.remove('theme-light');
        switchTheme.classList.add('theme-dark');
        switchTheme.innerHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>

        `;
        localStorage.setItem('darkModeWebKate', 'darkMode');
    }
}