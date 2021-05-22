const input = document.querySelector('#validation-input');
const limitLength = parseInt(input.dataset.length);

const getValue = () => {
    let value = input.value.length;

    if (value !== limitLength) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        return;
    }

    input.classList.add('valid');
    input.classList.remove('invalid');
};

input.addEventListener('input', getValue);
