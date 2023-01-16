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
    } else if (url == 'simplesport') {
        url = 'https://murnster.github.io/SimpleSport/';
    } else if (url == 'catan') {
        url = 'https://murnster.github.io/Web-Catan-Board/';
    }

    window.open(url, '_blank');
}

function toast(success) {
    let toast;

    if (success) {
        toast = document.getElementById('successToast');
    } else if (success === false) {
        toast = document.getElementById('errorToast')
    } else {
        toast = document.getElementById('questionToast');
    }

    toast.setAttribute('active', '');

    const toastTimeout = setTimeout(() => {
        toast.removeAttribute('active');
    }, 7500);

    toast.onclick = function() {
        clearTimeout(toastTimeout);
        toast.removeAttribute('active');
    }
}

function cleanTrolls(string) {
    const words = string.split(' ');
    var sendEmail = true;
    
    if (string.indexOf('aunt sum') != -1) {
        sendEmail = false;
    }

    if (
        words.indexOf('sum') != -1 ||
        words.indexOf('bahd') != -1
    ) {
        sendEmail = false;
    }

    return sendEmail;
}