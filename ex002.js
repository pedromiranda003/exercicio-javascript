function nome(nome1){
    return nome1
}
console.log(nome("Pedro"))

function nomeSobrenome(nome,sobrenome){
    return nome+ " "+sobrenome
}
console.log(nomeSobrenome("Pedro","Zumbi"))

// var string = "qualquer texto"

// var int = 1

// var float = 1.5

// var array = [0, 1, 2]

// var carro = {
//     name: 'civic',
//     cor: 'cinza',
//     ano: 2015,
//     marca: 'honda',
//     km: 100.200,
//     passageiro: ['puta', 'pedro', 'dona']
// } // objeto


// var arrayCarros = [
//     {
//         name: 'civic',
//         cor: 'cinza',
//         ano: 2015,
//         marca: 'honda',
//         km: 100.200,
//         passageiro: ['puta', 'pedro', 'dona']
//     },
//     {
//         name: 'gol',
//         cor: 'vermleho',
//         ano: 2007,
//         marca: 'volks',
//         km: 80.000,
//         passageiro: ['sua mina', 'pedro', 'zumbi']
//     }
// ]

// console.log(arrayCarros[1].name)

function carro(objeto){
    return objeto.name
}
console.log(carro({
       name: 'civic',
       cor: 'cinza',
       ano: 2015,
        marca: 'honda',
        km: 100.200,
        passageiro: ['puta', 'pedro', 'dona']}))

function carroMarca(objeto){
    return "nome do carro e"+ " "+objeto.name+" "+objeto.marca
}
console.log(carroMarca({
    name: 'civic',
    cor: 'cinza',
    ano: 2015,
     marca: 'honda',
     km: 100.200,
     passageiro: ['puta', 'pedro', 'dona']}))

     function corAno(objeto){
        return "a cor do carro e"+" "+objeto.cor+" "+objeto.ano
     }
     console.log(corAno({
        name: 'civic',
        cor: 'cinza',
        ano: 2015,
         marca: 'honda',
         km: 100.200,
         passageiro: ['puta', 'pedro', 'dona']}))

         console.log({
            rua:"plutao",
            cor:"amarela",
            numero:58

         })
         console.log({
            nome: "jeferson",
            idade: 20,
            sexo: "nao binario",
            peso: 120.37     
    
         })

         console.log({
            nome:"cg",
            cilindrada:160,
            ano:2024,
            km:20.3,
            cor:"vermelho"
         })
         console.log({
            modelo:"iphone 5c",
            ano:2014,
            saudeBateria:72,
            cor:"branco"
         })
         console.log({
            modelo:"ps5",
            ano:2022,
            cor:"branco",
            memoria:"1tb"
        })
        console.log({
            modelo:"ignite",
            sabor:"grape ice",
            puff:"5k",
            preco:95.30
        })
        console.log({
            modelo:"oxbar",
            sabor:"triple mango",
            puff:"8k",
            preco:100
        })
        console.log([
            "ignite",
            "oxbar"
        ])
        console.log([
            "civic",
            "gol",
            "jetta",
            "t-cross"
        ])
        console.log({
            carros:["civic","gol","jetta","t-cross"]
        })
         