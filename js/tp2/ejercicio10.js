//realizar un scrip que pida numero de filas y columnas y escrivba una tabla.
// Dentro de cada una de las celdas deberá escribirse un numero consecutivo en orden
// descendente. Si, por ejemplo, la tabla es de 7x5  los números irán del 35 al 1.

const pantalla = document.getElementById("pantalla")
//pantalla.textContent = "hola mundo" text.content solo imprime texto

pantalla.innerHTML += `
<table className="table table-striped">
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
    </tbody>
</table>
`

