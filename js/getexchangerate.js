const url_api = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
    
async function obtainData() {
    try{    
        const response = await fetch(url_api)
        const data_er_total = await response.json()
        const data_er_oficial = data_er_total[0].casa

        const {nombre, compra, venta} = data_er_oficial

        console.log(data_er_oficial)
        console.log(nombre)
        console.log(compra)
        console.log(venta)

        document.getElementById("er_name").textContent=nombre
        document.getElementById("er_buy").textContent=compra
        document.getElementById("er_sell").textContent=venta
    } catch(e){
        document.getElementById("er_name").textContent="Sin datos"
        document.getElementById("er_buy").textContent="Sin datos"
        document.getElementById("er_sell").textContent="Sin datos"
        console.log(e.message)
    }
}
obtainData()