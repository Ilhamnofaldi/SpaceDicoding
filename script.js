document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.listMenu');
    const navLinks = document.querySelectorAll('.listMenu li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');  

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollUp = document.querySelector('.scroll-up');

    // Scroll Up Function
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Tampilkan tombol setelah scroll 300px
            scrollUp.classList.add('show');
        } else {
            scrollUp.classList.remove('show');
        }
    });

    scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Scroll Up functionality initialized');
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.judul img');
    const listmenu = document.querySelector('.listmenu');
    const listmenuul = document.querySelector('.listmenu ul li a');
    const burger = document.querySelector('.burger div');
    const scroll = document.querySelector('.scroll-up');

    // Periksa apakah dark mode sudah aktif sebelumnya
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Fungsi untuk mengaktifkan dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    // Fungsi untuk menonaktifkan dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }

    // Set mode awal
    if (isDarkMode) {
        enableDarkMode();
        toggleSwitch.checked = true;
    }

    // Event listener untuk toggle switch
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});

