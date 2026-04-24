function generarTablas(){
    let contenedor=document.getElementById("divTabla")
    let valor=document.getElementById("respuesta")
    let contenido="<table><thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody></tbody>";
    let tabla=valor.value;

    if (tabla===""){
        alert ("Valor Vacío")
    }

    for (let i = 1; i <= 10; i++) {
        let resultado= tabla*i;

        contenido+="<tr><td>"+(tabla+"x"+i+"</td><td>"+(resultado))+"</td></tr>";
    }
    contenido+="</tbody></table>"
    contenedor.innerHTML=contenido;

    let titulo=document.getElementById("titulo");
    titulo.innerText="Tabla del "+tabla
}