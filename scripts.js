const activateButton = document.querySelector('.raffle-button')

function generateNumber() {
    const minValue = Math.ceil(document.querySelector('.input-min').value)
    const maxValue = Math.floor(document.querySelector('.input-max').value)

    const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    alert(result)
}

activateButton.addEventListener('click', generateNumber)