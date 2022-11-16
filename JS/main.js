const openModal = document.querySelector('.agregar_info');
const modal = document.querySelector('.modal');
const closeModal =document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');

});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');

});

const formulario_obj = document.querySelector('#form_obj');

formulario_obj.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_obj").value
    
    const respuesta = document.querySelector("#respuesta_obj");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

const formulario_vis = document.querySelector('#form_vis');

formulario_vis.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_vis").value
    
    const respuesta = document.querySelector("#respuesta_vis");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});