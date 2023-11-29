function validarObjeto(objetoPessoa){
    if (objetoPessoa.idade > 18){
        return"voce e de maior"
    } else {
        return " voce e de menor"
    }
}
const objetoPessoa = {
    nome:"Lucas",
    sobrenome:"salles",
    idade:19
}
    console.log(validarIdadeObjeto(objetoPessoa))
