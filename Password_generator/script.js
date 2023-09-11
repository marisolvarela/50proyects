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

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getSimboloAleatorio
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
 

