function Calculadora (numero1 , numero2 , operador){
let resultado
let num1 =  parseInt(numero1)
let num2 =  parseInt(numero2)

switch (operador) {
    case "+" :
    resultado = num1 + num2 
    break ; 

    case "-" :
    resultado = num1 - num2 
    break ;

    case "/" :
    resultado = num1 / num2 
    break ; 

    case "*" :
    resultado = num1 * num2 
    break ; 

    case "+" :
    resultado = num1 + num2 
    break ; 

    case "e" :
    resultado = num1 * num1
    break ; 
    
    while(contador < num2 - 1) {
        resultado = resultado * num1
        contador ++
    }
    
}

    if (resultado == undefined || resultado > 100000){
        resultado = "ERRO"
        return resultado
    }
}