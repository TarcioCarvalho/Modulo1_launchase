const usuarios = [
    {nome:"Carlos", tecnologias:["HTML", "CSS"]},
    {nome:"Jasmine", tecnologias:["Javascript", "CSS"]},
    {nome:"Tuane", tecnologias:["HTML", "Node.js"]}
    
]

for(let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCss(usuarios[i])
    if(usuarioTrabalhaComCss){
        console.log(`O ${usuarios[i].nome} trabalha com CSS`)
    }
}

function checaSeUsuarioUsaCss(usuario){
    
    for(let tecnologia of usuario.tecnologias){
        if(tecnologia == "CSS"){
            return true
        }
    }

    return false
}