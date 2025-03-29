document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnToggle");
    const texto = document.getElementById("maisTexto");

    btn.addEventListener("click", function () {
        if (texto.style.display === "none" || texto.style.display === "") {
            texto.style.display = "block";
            btn.textContent = "Ler menos";
        } else {
            texto.style.display = "none";
            btn.textContent = "Ler mais";
        }
    });
});

document.getElementById("baixar-pdf").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "caminho/do/seu/arquivo.pdf"; // Substitua pelo caminho do arquivo PDF
    link.download = "arquivo.pdf"; // Nome do arquivo a ser baixado
    link.click();
});
