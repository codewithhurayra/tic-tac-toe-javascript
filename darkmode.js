let darkmode = localStorage.getItem('darkmode');
const toggleBtn = document.querySelector('.themChange');

const enableDarkMode = () =>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active')
}

const disableDarkMode =() =>{
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode',null)
}

if(darkmode === 'active')enableDarkMode()

toggleBtn.addEventListener('click', () =>{
    darkmode = localStorage.getItem('darkmode')
if(darkmode != 'active'){
    enableDarkMode()
}else{
    disableDarkMode()
}
});