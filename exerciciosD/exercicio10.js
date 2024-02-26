import { get_positive_number, get_number, print } from '../functions/io_utils.js'

// exercicio 10

function main(){
    print('   Validar data   ')
    const dia = get_positive_number('Insira o dia: ')
    const mes = get_positive_number('Insira o mes: ')
    const ano = get_positive_number('Insira o ano: ')
    const valido = conferir_bissexto(dia, mes, ano)

    if (valido){
        print('O seu ano é bissexto')
    } else {
        print('Inválido')
    }

}

func

function conferir_bissexto(diab, mesb, anob){
    // ano bissexto
    if (anob % 4 === 0){
        if (mesb === 2 && diab > 29){
            return false
        } else {
            return true
        }
    } else if ( mesb === 2 && diab > 28){
        return false
    } else {
        return true
    }

}