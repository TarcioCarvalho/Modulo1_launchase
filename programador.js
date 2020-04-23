const dev = {
    nome: "Fernanda",
    idade: 28,
    tecnologias:[
        {nome:"C++", especialidade:"Desktop"},
        {nome:"Python", especialidade:"Data science"},
        {nome:"Javascript", especialidade:"Web/Mobile"}
    ]
}

console.log(`O usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[0].nome} com especialidade em ${dev.tecnologias[0].especialidade}`)