let valor = Number(prompt("Digite o valor da compra:"));

if (valor >= 100) {
    let desconto = valor * 0.10;
    let total = valor - desconto;

    alert("Desconto: " + desconto);
    alert("Valor final: " + total);
}