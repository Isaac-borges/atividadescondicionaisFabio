
import { print, get_positive_number, get_number} from '../functions/io_utils.js'

function main(){
    print('-~------------------~-')
    print('   Calculo de idade   ')
    const diaatual = get_positive_number('Insira o dia atual ------ : ') 
    const mesatual = get_positive_number('Insira o mês atual ------ : ') 
    const anoatual = get_number('Insira o ano atual ------ : ') 
    const dianasc = get_positive_number('Insira o dia de nascimento: ') 
    const mesnasc = get_positive_number('Insira o mês de nascimento: ') 
    const anonasc = get_number('Insira o ano de nascimento: ') 

    const idade = calcular_idade(diaatual, mesatual, anoatual, dianasc, mesnasc, anonasc)

    print('-~------------------~-')
    print(' ')
    print('   Considerando que cada mês tem 30 dias... ')
    print(`A idade da pessoa indicada é >>> ${idade} <<<`)
    print(' ')
    print('-~------------------~-')

}

function calcular_idade(dat, mat, aat, dnas, mnas, anas){
    return Math.floor((((dat) + ((mat-1) * 30) + ((aat-1) * 360)) - ((dnas) + ((mnas-1) * 30) + ((anas-1) * 360))) / (360))
}

main()


/*
* inicio: 
* processamento: 
* final:
*/