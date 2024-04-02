class Botão {
    constructor(indentificação) {
        this._botão = document.querySelector(indentificação)
    }
    randomPosition(){
        this._botão.addEventListener("mouseover",e =>{
            e.preventDefault()
            console.log(e)
            this._botão.style.position ="relative" 
             this._botão.style.left = parseInt(Math.random()*(45 - 0)-0)+"vw"
            this._botão.style.top = parseInt(Math.random()*(55  -0) - 0)+"vh"

        })
      
    }

    mudarDeSite(href){
        this._botão.addEventListener("click",e =>{
            e.preventDefault()
            window.location.href = href
        })
    }
}
const botãoSim = new Botão("#sim")
const botãoNao = new Botão("#nao")
botãoNao.randomPosition()
botãoSim.mudarDeSite(`https://www.youtube.com/watch?v=mZA-To7OdEA`)
