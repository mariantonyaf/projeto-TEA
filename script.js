function toggleTexto() {
    var maisTexto = document.getElementById("maisTexto");
    var btnToggle = document.getElementById("btnToggle");
    
    if (maisTexto.style.display === "none") {
        maisTexto.style.display = "block";
        btnToggle.innerText = "Ler menos";
    } else {
        maisTexto.style.display = "none";
        btnToggle.innerText = "Ler mais";
    }
}