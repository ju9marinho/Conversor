const convertButton = document.querySelector(".convert-button") // passo 1 - mapear do html, criar a variavel //
const currencySelect = document.querySelector(".currency-select") // campo converter para

function convertValues() { // passo 3 função sobre o que deve acontecer qdo o botão for clicado //
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value-converted") // Outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2

    if(currencySelect.value == "dolar") { // Se o select estiver selecionado com o valor do dolar, entre aqui //
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") { // Se o select estiver selecionado com o valor de euro, entre aqui //
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"  
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    
}

function changeCurrency () {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    
    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) // passo 2 - criar ouvinte para mudar quando clicar //        

