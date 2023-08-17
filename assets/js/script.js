const iconInfo = document.querySelector('.info-icon');
const modalInfo = document.querySelector('.about-me-info');

const handleMouseClick = () => {
    if (modalInfo.style.display === 'flex') {
        return modalInfo.style.display = 'none'
    }
    modalInfo.style.display = 'flex';
}

const handleMouseBlur = () => {
    modalInfo.style.display = 'none';
}
iconInfo.addEventListener('click', handleMouseClick);