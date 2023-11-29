function pod(ignite){
    return ignite
}
console.log(pod({
    sabor:"lemon mint",
    puff:"5k"
})   
)
console.log([
    {
        sabor:"mentol",
        puff:"8k"
    },
    {
        sabor:"ice grape",
        puff:"1k"
    },
    {
        sabor:"triple mango",
        puff:"5k"
    }

])
    console.log([
        "pedro",
        "zumbi"
    ])
    console.log([
        1,
        2,
        3,
        4,
        5
    ])
    function variavel(){
        const nome ="pedro"
        var sobrenome ="miranda"
        let idade = 20
        return nome+" "+sobrenome+" "+idade
    }
    console.log(variavel())

    function validarIdade(idade){
        if(idade > 18){
            return "voce e de maior"
        }
        else{
            return "voce e de menor"
        }
    }
    
    console.log(validarIdade(20))
console.log(validarIdade(15))



