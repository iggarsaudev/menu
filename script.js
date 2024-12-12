// Selección de elementos principales
const menuElements = document.getElementById("menuElements");
const menuTop = document.getElementById("menuTop");
const menuBottom = document.getElementById("menuBottom");
const divMenuElements = document.querySelector('.menuElements');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menuList');

// Función para actualizar el menú dinámicamente
function updateMenu(selectedIndex) {
    const allItems = Array.from(document.querySelectorAll("#menuElements li, #menuTop li, #menuBottom li"));

    // Limpiar contenedores y clases activas
    menuTop.innerHTML = "";
    menuBottom.innerHTML = "";
    menuElements.innerHTML = "";

    // Redistribuir elementos
    allItems.forEach((item, i) => {
        item.classList.remove("active");
        if (i < selectedIndex) {
            menuTop.appendChild(item); // Elementos previos al div superior
        } else if (i === selectedIndex) {
            menuElements.appendChild(item); // Elemento seleccionado
            item.classList.add("active");
            divMenuElements.classList.add("menuElements-active"); // Cambio el color del fondo al div que contiene el elemento seleccionado            
            menu.classList.add("menu-active");             
            menuList.classList.add("menuList-active");            
        } else {
            menuBottom.appendChild(item); // Elementos posteriores al div inferior
        }
    });

    // Ajustar alturas dinámicas
    menuTop.style.height = `${menuTop.childElementCount * 2.5}rem`;
    menuBottom.style.height = `${menuBottom.childElementCount * 2.5}rem`;
}

// Agregar evento de clic a los elementos del menú
document.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const index = parseInt(li.getAttribute("data-index"));
    updateMenu(index); // Actualizar el menú según el índice seleccionado
});
