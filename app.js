const form = document.getElementById("form-tarea")
const input = document.getElementById("input-tarea")
const lista = document.getElementById("lista-tareas")
const contador = document.getElementById("contador-tareas");

function actualizarContador() {
    const total = lista.querySelectorAll(".tarea").length;
    contador.textContent = total === 1 ? "1 tarea " : `${total} tareas`

}

function agregarTarea(texto){
    const li = document.createElement("li");
    li.className = "tarea";
    li.innerHTML = `
    <span class="texto">${texto}</span>
    <button class="eliminar">x</button>
    `;
    lista.appendChild(li)
    actualizarContador();
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const texto = input.value.trim();
    if(texto ==="") return;
    agregarTarea(texto);
    input.value = "";
    input.focus();
});

lista.addEventListener("click", (event) =>{
    if (event.target.classList.contains("eliminar")){
        event.target.closest(".tarea").remove();
        actualizarContador();
    } else {
        event.target.parentElement.classList.toggle("completada");
    }
})

actualizarContador ();