const activateButton = document.querySelector('.raffle-button')

function generateNumber() {
    const minValue = Math.ceil(document.querySelector('.input-min').value)
    const maxValue = Math.floor(document.querySelector('.input-max').value)

    if( minValue >= maxValue) {
        alert('O valor mínimo tem que ser MENOR do que o valor máximo')
    } else {
        const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    alert(result)
    }

}

activateButton.addEventListener('click', generateNumber)