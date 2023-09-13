const numeroTotalLetrasAlfabeto = 26
const codigoCorrespondienteALaPrimeraLetraMinusculaDelAlfabeto = 97
const codigoCorrespondienteALaPrimeraLetraMayusculaDelAlfabeto = 65
const numeroTotalBaseDecimal = 10
const codigoCorrespondienteAlPrimerNumeroDeBaseDecimal = 48

// function getLetraMinusculaAleatoria() {
//     return String.fromCharCode(obtenerCodigoNumericoEnteroBajoAleatorioCorrespondienteALetraMinusculaDeAlfabeto())
// }
// function getLetraMayusculaAleatoria() {
//     return String.fromCharCode(obtenerCodigoNumericoEnteroBajoAleatorioCorrespondienteALetraMayusculaDeAlfabeto())
// }        

// function obtenerCodigoNumericoEnteroBajoAleatorioCorrespondienteALetraMinusculaDeAlfabeto() {
//     return Math.floor(obtenerCodigoNumericoDecimalAleatorioDeLetra('minuscula'))
// }
// function obtenerCodigoNumericoEnteroBajoAleatorioCorrespondienteALetraMayusculaDeAlfabeto() {
//     return Math.floor(obtenerCodigoNumericoDecimalAleatorioDeLetra('mayuscula'))
// }

// function obtenerCodigoNumericoDecimalAleatorioDeLetra(tipoDeLetra) {
//     if(tipoDeLetra === 'minuscula'){
//         return  obtenerNumeroAleatorioDecimalParaObtenerLetraDelAlfabeto() + codigoCorrespondienteALaPrimeraLetraMinusculaDelAlfabeto
//     }
//     if(tipoDeLetra === 'mayuscula'){
//         return obtenerNumeroAleatorioDecimalParaObtenerLetraDelAlfabeto() + codigoCorrespondienteALaPrimeraLetraMayusculaDelAlfabeto
//     }

// }

// function obtenerNumeroAleatorioDecimalParaObtenerLetraDelAlfabeto() {
//     return Math.random() * numeroTotalLetrasAlfabeto
// }

// function getNumeroAleatorio() {
//     return String.fromCharCode(obtenerCodigoNumericoEnteroBajoAleatorioCorrespondienteABaseDecimal())
// }

// function obtenerCodigoNumericoEnteroBajoAleatorioCorrespondienteABaseDecimal() {
//     return Math.floor(obtenerCodigoNumericoDecimalAleatorioDeBaseDecimal())
// }

// function obtenerCodigoNumericoDecimalAleatorioDeBaseDecimal() {
//     return obtenerNumeroAleatorioDecimalParaObtenerNumeroDeBaseDecimal() + codigoCorrespondienteAlPrimerNumeroDecimal
// }

// function obtenerNumeroAleatorioDecimalParaObtenerNumeroDeBaseDecimal() {
//     return Math.random() * numeroTotalBaseDecimal
// }

const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getSimboloAleatorio
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked
    
    resultEl.innerHTML = generatePassword(hasLower, hasUpper,hasNumbers,hasSymbols,length)

})

function generatePassword(lower,upper,number,symbol,length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr =[ {lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
   
    if(typesCount === 0) {
        return ''
    }

    for(let i = 0; i < length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword +=randomFunc [funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0,length)

    return finalPassword

}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * numeroTotalLetrasAlfabeto) + codigoCorrespondienteALaPrimeraLetraMinusculaDelAlfabeto)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * numeroTotalLetrasAlfabeto) + codigoCorrespondienteALaPrimeraLetraMayusculaDelAlfabeto )

}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * numeroTotalBaseDecimal) + codigoCorrespondienteAlPrimerNumeroDeBaseDecimal)

}

function getSimboloAleatorio() {
    const symbols ='!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]

}
 

