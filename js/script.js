let menu = document.getElementById("menu_links");
let botao_menu = document.getElementById("botao_menu");

function mostrarMenu (){
    if (window.getComputedStyle(menu).display == "none") {
        menu.style.display = "flex";
        botao_menu.setAttribute("arial-label","fechar menu")
        botao_menu.setAttribute("arial-expande","true")
    } else{
        menu.style.display = "none"
        botao_menu.setAttribute("arial-label","abrir menu")
        botao_menu.setAttribute("arial-expanded","false")
    }
}