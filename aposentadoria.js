const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 30

if(contribuicao >= 35 && sexo == "M" || contribuicao >= 30 && sexo == "F"){
    if(sexo == "F" && (contribuicao + idade >= 85) || sexo == "M" && (contribuicao + idade >= 95)){
        console.log(`${nome}, você pode se aponsentar!`)
    }else{
        console.log(`${nome}, você ainda não pode se aponsentar!`)
    }
} else{
    console.log(`${nome}, você ainda não pode se aponsentar!`)
}