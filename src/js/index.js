const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll('.personagem')


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarPersonagem()

        botao.classList.add('selecionado')

        desselecionarBotao()

        personagens[indice].classList.add('selecionado')
    })
})
function desselecionarPersonagem() {
    const botaoSeclecionado = document.querySelector(".botao.selecionado")
    botaoSeclecionado.classList.remove('selecionado')
    console.log(botaoSeclecionado)
}

function desselecionarBotao() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}

