const text = document.getElementById('text');
const image = document.querySelector('section img');

function setHour() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    let message;
    if (hour >= 6 && hour < 12) {
        message = 'BOM DIA!';
        document.body.style.background = 'var(--morning)';
        image.setAttribute('src', './imgs/morning.jpg')
    }
    else if (hour >= 12 && hour < 18) {
        message = 'BOA TARDE!';
        document.body.style.background = 'var(--afternoon)'
        image.setAttribute('src', './imgs/afternoon.jpg')
    }
    else if (hour >= 18 && hour < 24) {
        message = 'BOA NOITE!';
        document.body.style.background = 'var(--night)'
        image.setAttribute('src', './imgs/night.jpg')
    }
    else if (hour < 6  || hour === 0) {
        message = 'BOA MADRUGADA!';
        document.body.style.background = 'var(--dawn)'
        image.setAttribute('src', './imgs/dawn.jpg')
    }
    text.innerText = `${message} AGORA SÃO ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}h`;
}

window.onload = setHour