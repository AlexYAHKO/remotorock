async function baixar() {
    const url = "https://683109806205ab0d6c3b0d7c.mockapi.io/api/v1/servers"
    const resposta = await fetch(url)
    const json = await resposta.json()
    return json
}

const servidor = "https://youtube.com"

let retorno =  baixar() 

let coluna1 = `      <div class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="card-text" id="pc1">Computador do escritorio</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group"> <a id="pc1link"> <button type="button"
                             class="btn btn-sm btn-outline-secondary">View</button> </a> </div>
                        </div>
                    </div>
                </div>
        </div> `

let coluna2 = ` 
                <div class="col">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="card-text" id="pc2">Computador de casa</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group"> <a id="pc2link"> <button type="button"
                                    class="btn btn-sm btn-outline-secondary">View</button> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
`
document.getElementById("linha").innerHTML += coluna1
document.getElementById("linha").innerHTML += coluna2

retorno.then( ret => { 
    document.getElementById("pc1").innerHTML = ret[5].name 
    document.getElementById("pc1link").setAttribute("href",`${servidor}/${ret[5].port}`)
}) 

retorno.then( ret => { 
    document.getElementById("pc2").innerHTML = ret[1].name 
    document.getElementById("pc2link").setAttribute("href",`${servidor}/${ret[1].port}`)    

})
