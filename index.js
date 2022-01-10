function btnlinhas() {
    var n = prompt("digite o numero de asteristicos");

    function linhaAsteristico() {
        var asteristico = "";
        for (var i = 1; i <= n; i++) {
            asteristico +=  "*";
        }
        document.write(
            `<h1> ${asteristico}</h1>
        `);
    }

    linhaAsteristico();

}

function btntriangulos() {
    var n = prompt("digite o numero de asteristicos");

    function trianguloAsterisco() {
        for (var linha = 1; linha <= n; linha++) {
            var asteristico = "";
            for (var i = 1; i <= linha; i++) {
                asteristico +=  "&#10084;";
            }
            document.write(
                `<h1> ${asteristico}</h1>
        `);
        }
    }
    trianguloAsterisco();
}