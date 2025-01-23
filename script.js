const shareIcon = document.getElementById('shareIcon');
const shareEl = document.getElementById('share');
const cssRoot = document.querySelector(':root');

let colors = getComputedStyle(cssRoot);



shareIcon.addEventListener('click', () => {
    let currentDisplay = shareEl.style.display;

    if (currentDisplay === 'flex') {
        let whiteColor = colors.getPropertyValue('--Light-Grayish-Blue');
        shareIcon.style.backgroundColor = whiteColor;
        shareIcon.style.marginTop = '10px'
        shareEl.style.display = 'none';
    } else {
        shareIcon.style.backgroundColor = 'white';
        shareIcon.style.marginTop = '20px'
        shareEl.style.display = 'flex';
        
    }
});
