const convertButton = document.querySelector(".convert-button") // passo 1 - mapear do html, criar a variavel //

function convertValues() { // passo 3 função sobre o que deve acontecer qdo o botão for clicado //
    
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoConvert = document.querySelector("currency-value-to-convert") // Valor em real

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday


convertButton.addEventListener("click", convertValues) // passo 2 - criar ouvinte para mudar quando clicar //        

}