const btnDark = document.querySelector('.btn-dark-mode');
const footer = document.querySelector("#footer");

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    nav.classList.toggle('dark-theme')
    footer.classList.toggle('dark-theme')
    if(document.body.className === 'dark-theme'){
        btnDark.innerHTML = `
                <i class="fa-solid fa-moon"></i>
            `
    }else{
        btnDark.innerHTML = `
                <i class="fa-solid fa-sun"></i>
            `
    }
})