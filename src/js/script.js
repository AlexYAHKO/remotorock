async function baixar() {
    const url = "https://683109806205ab0d6c3b0d7c.mockapi.io/api/v1/servers"
    const resposta = await fetch(url)
    const json = await resposta.json()
    return json
}

let retorno =  baixar() 

retorno.then( ret => document.getElementById("pc1").innerHTML = ret[1].name ) 