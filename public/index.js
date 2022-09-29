function gerarCor() {
    const id = Math.floor(Math.random() * 3)
    
    const q0 = document.getElementById("q0")
    const q1 = document.getElementById("q1")
    const q2 = document.getElementById("q2")

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
                rtxt.innerHTML = r
                gtxt.innerHTML = g
                btxt.innerHTML = b

                q0.addEventListener("click", ganhou)
                alert("aa")
            } else {
                
                q0.addEventListener("click", perdeu)
            }
        } else if (c == 1) {
            q1.style.background = `rgb(${r}, ${g}, ${b})`
            if (id == 1) {
                rtxt.innerHTML = r
                gtxt.innerHTML = g
                btxt.innerHTML = b

                q1.addEventListener("click", ganhou)
                alert("bb")
            } else {
                q1.removeEventListener("click")
                q1.addEventListener("click", perdeu)
            }
        } else {
            q2.style.background = `rgb(${r}, ${g}, ${b})`
            if (id == 2) {
                rtxt.innerHTML = r
                gtxt.innerHTML = g
                btxt.innerHTML = b

                q2.addEventListener("click", ganhou)
                alert("cc")
            } else {
                q2.addEventListener("click", perdeu)
            }
        }
    }
}
function ganhou() {
    alert("ganhou")
}
function perdeu() {
    alert("perdeu")
}
gerarCor()
