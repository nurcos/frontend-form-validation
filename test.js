document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('blur', () => {
        if(input.value == ''){
            input.style.backgroundColor = 'red';
        } else {
            input.style.backgroundColor = '';
        }
    });
});

let fieldCheck = false;

document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('input').forEach((input) => {
        if (input.value === '') {
            fieldCheck = true;
        }
    });
    
    if (fieldCheck === true){
        alert('you must fill in fields');
        fieldCheck = false;
    } else {
        alert('success');
    }
});