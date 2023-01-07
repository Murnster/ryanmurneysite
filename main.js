function init() {
    let margin = 100;

    if (window.screen.width <= 600) {
        margin = 70;
    } else {
        document.querySelectorAll('.panel').forEach(e => {
            if (e.id != 'project') {
                e.style.height = `${window.innerHeight - margin}px`;
            }
        });
    }

    setTimeout(() => {
        window.scrollTo({ 
            top: 0
        });
    }, 200);
}

function moveToPanel(panel, isMobile) {
    const element = document.getElementById(panel).offsetTop;

    window.scrollTo({ 
        top: element - 100,
        behavior: 'smooth'
    });

    if (isMobile) {
        showMobileMenu();
    }
}

function showMobileMenu() {
    const menu = document.getElementById('mobileMenu');

    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function goToLink(url) {
    if (url == 'git') {
        url = 'https://github.com/Murnster';
    } else if (url == 'linkedin') {
        url = 'https://www.linkedin.com/in/ryanmurney/';
    } else if (url == 'gmail') {
        
    }

    window.open(url, '_blank');
}

// function sendEmail() {
//     const name = document.getElementById('contactName'); 
//     const email = document.getElementById('contactEmail'); 
//     const phone = document.getElementById('contactPhone'); 
//     const message = document.getElementById('contactMessage');

//     if (name.value == '') {
//         name.focus();
//     } else if (email.value == '') {
//         email.focus();
//     } else if (phone.value == '') {
//         phone.focus();
//     } else if (message.value) {
//         message.focus();
//     } else {
//         emailjs.send('', '');
//     }
// }