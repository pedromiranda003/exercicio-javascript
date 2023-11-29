function media(nota1,nota2,nota3,nota4){
    const resultadoMedia =(nota1+nota2+nota3+nota4)/4
    if(resultadoMedia >= 6){
        return 'voce passou' +' '+resultadoMedia
    }
    else {
        return 'voce reprovou'+ resultadoMedia
    }
}
console.log(media(9,7,3,5))