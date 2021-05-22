const input = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

const fontSizeControl = () => {
    text.setAttribute('style', `font-size:${input.value}px`);
};

input.addEventListener('input', fontSizeControl);
