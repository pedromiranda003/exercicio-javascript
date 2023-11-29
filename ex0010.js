function map(){
    const array = [1,2,3,4,5,6,7,8,9]
    const retornoArray=array.map(numero =>{
        return numero + 2
    })
    return retornoArray
}
console.log(map())