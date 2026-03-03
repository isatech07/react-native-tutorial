const user = {
    nome: 'Isabelle Silva',
    email: 'isabelle.silva@gmailcom',
    idade: 28,
    "sobre nome": "Isabelle Silva"
}
console.log(user.nome) // Acessando a propriedade nome do objeto user
console.log(user["nome"]) // Outra forma de acessar a propriedade nome do objeto user
console.log(user["sobre nome"]) // Acessando a propriedade com espaço no nome do objeto user

let escolha = "email"
console.log(user[escolha]) // Acessando a propriedade email do objeto user usando a variável escolha

const props = {
    avatar:"https://example.com/avatar.jpg",
    nome: "Isabelle Silva",
    email: "isabelle.silva@gmailcom"
}

//const avatar = props.avatar
//const nome = props.nome
//const email = props.email

const { avatar, nome, email } = props // Desestruturação do objeto props para extrair as propriedades avatar, nome e email

console.log(avatar, nome, email)