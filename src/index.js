let id = 0
const q0 = document.getElementById("q0")
const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const botao = document.getElementsByTagName("button")
const recado = document.getElementById("recado")

let rgb = [0, 0, 0]

function gerarCor() {
    id = Math.floor(Math.random() * 3)
    console.log(id)
    recado.innerHTML = "Adivinhe a Cor..."

    /*Desativando botão para evitar erros*/
    botao[0].setAttribute('disabled','disabled')
    botao[0].setAttribute("class", "desativado")

    /*Variaveis para o texto*/
    const rtxt = document.getElementById("r")
    const gtxt = document.getElementById("g")
    const btxt = document.getElementById("b")
    for (c = 0; c <= 2; c++) {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        if (c == 0) {
            q0.style.background = `rgb(${r}, ${g}, ${b})`
            if (id == 0) {
                rtxt.innerHTML = `${r}%`
                gtxt.innerHTML = `${g}%`
                btxt.innerHTML = `${b}%`

                q0.addEventListener("click", ganhou)
                q1.addEventListener("click", perdeu)
                q2.addEventListener("click", perdeu)
                rgb.splice(0, 1, r)
                rgb.splice(1, 1, g)
                rgb.splice(2, 1, b)
            }
        } else if (c == 1) {
            q1.style.background = `rgb(${r}, ${g}, ${b})`
            if (id == 1) {
                rtxt.innerHTML = `${r}%`
                gtxt.innerHTML = `${g}%`
                btxt.innerHTML = `${b}%`

                q1.addEventListener("click", ganhou)
                q0.addEventListener("click", perdeu)
                q2.addEventListener("click", perdeu)
                rgb.splice(0, 1, r)
                rgb.splice(1, 1, g)
                rgb.splice(2, 1, b)
            }
        } else {
            q2.style.background = `rgb(${r}, ${g}, ${b})`
            if (id == 2) {
                rtxt.innerHTML = `${r}%`
                gtxt.innerHTML = `${g}%`
                btxt.innerHTML = `${b}%`

                q2.addEventListener("click", ganhou)
                q1.addEventListener("click", perdeu)
                q0.addEventListener("click", perdeu)
                rgb.splice(0, 1, r)
                rgb.splice(1, 1, g)
                rgb.splice(2, 1, b)
            }
        }
    }
}
function ganhou() {
    recado.innerHTML = "Acertou!!"
    gerenciando()
}
function perdeu() {
    recado.innerHTML = "Errou..."
    gerenciando()
}
function gerenciando() {
    if (id == 0) {
        /*Retirando eventos e trocando cores*/
        q0.removeEventListener("click", ganhou)
        q1.removeEventListener("click", perdeu)
        q2.removeEventListener("click", perdeu)

        q1.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        q2.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    } else if (id == 1) {
        /*Retirando eventos e trocando cores*/
        q1.removeEventListener("click", ganhou)
        q0.removeEventListener("click", perdeu)
        q2.removeEventListener("click", perdeu)

        q0.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        q2.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    } else if (id == 2) {
        /*Retirando eventos e trocando cores*/
        q2.removeEventListener("click", ganhou)
        q1.removeEventListener("click", perdeu)
        q0.removeEventListener("click", perdeu)

        q1.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        q0.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    }
        /*Ativando o botão*/
        botao[0].removeAttribute("disabled", "disabled")
        botao[0].removeAttribute("class", "desativado")
}
gerarCor()