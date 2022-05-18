document.addEventListener('DOMContentLoaded', () => {
    setWebpageTheme(true);
})

const btnToggle = document.getElementById("toggle-mode");

btnToggle.addEventListener("change", () => {
    console.log('change')
    setWebpageTheme()
})

function setWebpageTheme(onloadPage){
    const rootData = document.documentElement.dataset;
    const defaultTheme = rootData.theme;
    const toggleCheckbox = document.getElementById('checkbox');
    let theme = defaultTheme;
    if(onloadPage){
        const localStorageTheme = localStorage.getItem('theme');
        theme = localStorageTheme ? localStorageTheme : defaultTheme;
        rootData.theme = theme;
    } else {
        rootData.theme = theme === 'light' ? 'dark' : 'light';
    }
    toggleCheckbox.checked = rootData.theme === 'light' ? false : true;    
    localStorage.setItem('theme', rootData.theme);
}