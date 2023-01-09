function init() {
    let margin = 100;
    
    if (window.screen.width <= 600) {
        margin = 70;
    } else if (window.screen.width > 992) {
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

    let margin = 100;

    if (window.screen.width < 992) {
        margin = 70;
    }

    window.scrollTo({ 
        top: element - margin,
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
    }

    window.open(url, '_blank');
}