function media(nota1,nota2,nota3,nota4){
    const resultadoMedia =(nota1+nota2+nota3+nota4)/4
    if (resultadoMedia >= 6){
    return 'voce passou'
    }
    else {
    return 'voce reprovou'
    
    }
}
console.log(media(0,4,6,8))