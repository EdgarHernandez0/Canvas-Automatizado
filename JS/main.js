const openModal = document.querySelector('.agregar_info');
const modal = document.querySelector('.modal');
const closeModal =document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
    tooltipOcultar();
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO OBJETIVO
const formulario_obj = document.querySelector('#form_obj');

formulario_obj.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_obj").value
    
    const respuesta = document.querySelector("#respuesta_obj");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO VISION UTOPICA
const formulario_vis = document.querySelector('#form_vis');

formulario_vis.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_vis").value
    
    const respuesta = document.querySelector("#respuesta_vis");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO IMPACTO
const formulario_impacto = document.querySelector('#form_impacto');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_impacto").value
    
    const respuesta = document.querySelector("#respuesta_impacto");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO PROBLEMA NECESIDAD
const formulario_problema = document.querySelector('#form_problema');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_problema").value
    
    const respuesta = document.querySelector("#respuesta_problema");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO ALTERNATIVAS EXISTENTES
const formulario_alternativas = document.querySelector('#form_alternativas');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_alternativas").value
    
    const respuesta = document.querySelector("#respuesta_alternativas");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO ACTIVIDADES CLAVE
const formulario_actividades = document.querySelector('#form_actividades');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_actividades").value
    
    const respuesta = document.querySelector("#respuesta_actividades");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO ALIANZAS CLAVE
const formulario_alianzas = document.querySelector('#form_alianzas');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_alianzas").value
    
    const respuesta = document.querySelector("#respuesta_alianzas");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO RECURSOS CLAVE
const formulario_recursos = document.querySelector('#form_recursos');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_recursos").value
    
    const respuesta = document.querySelector("#respuesta_recursos");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO PROPUESTA DE VALOR
const formulario_propuesta = document.querySelector('#form_propuesta');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_propuesta").value
    
    const respuesta = document.querySelector("#respuesta_propuesta");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO C. COMUNICACION
const formulario_comunicacion = document.querySelector('#form_comunicacion');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_comunicacion").value
    
    const respuesta = document.querySelector("#respuesta_comunicacion");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO C. DISTRIBUCION
const formulario_distribucion = document.querySelector('#form_distribucion');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_distribucion").value
    
    const respuesta = document.querySelector("#respuesta_distribucion");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO USUARIOS 
const formulario_usuarios = document.querySelector('#form_usuarios');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_usuarios").value
    
    const respuesta = document.querySelector("#respuesta_usuarios");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO CLIENTES
const formulario_clientes = document.querySelector('#form_clientes');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_clientes").value
    
    const respuesta = document.querySelector("#respuesta_clientes");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO BENEFICIARIOS
const formulario_beneficiarios = document.querySelector('#form_beneficiarios');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_beneficiarios").value
    
    const respuesta = document.querySelector("#respuesta_beneficiarios");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO ESTRUCTURA DE COSTOS
const formulario_estructura = document.querySelector('#form_estructura');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_estructura").value
    
    const respuesta = document.querySelector("#respuesta_estructura");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO EXCEDENTES
const formulario_excedentes = document.querySelector('#form_excedentes');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_excedentes").value
    
    const respuesta = document.querySelector("#respuesta_excedentes");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// FORMULARIO FUENTES DE INGRESOS
const formulario_fuentes = document.querySelector('#form_fuentes');

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_fuentes").value
    
    const respuesta = document.querySelector("#respuesta_fuentes");
    respuesta.textContent = `${descripcion}`

    modal.classList.remove('modal--show');
});

// MOSTRAR Y OCULTAR TOOLTIPS
function tooltipOcultar(){
    document.querySelector('#tooltipEle1').style.visibility = "hidden";
    document.querySelector('#tooltipEle2').style.visibility = "hidden";
    document.querySelector('#tooltipEle3').style.visibility = "hidden";
    document.querySelector('#tooltipEle4').style.visibility = "hidden";
    document.querySelector('#tooltipEle5').style.visibility = "hidden";
    document.querySelector('#tooltipEle6').style.visibility = "hidden";
    document.querySelector('#tooltipEle7').style.visibility = "hidden";
    document.querySelector('#tooltipEle8').style.visibility = "hidden";
    document.querySelector('#tooltipEle9').style.visibility = "hidden";
    document.querySelector('#tooltipEle10').style.visibility = "hidden";
    document.querySelector('#tooltipEle11').style.visibility = "hidden";
    document.querySelector('#tooltipEle12').style.visibility = "hidden";
    document.querySelector('#tooltipEle13').style.visibility = "hidden";
    document.querySelector('#tooltipEle14').style.visibility = "hidden";
    document.querySelector('#tooltipEle15').style.visibility = "hidden";
    document.querySelector('#tooltipEle16').style.visibility = "hidden";
    document.querySelector('#tooltipEle17').style.visibility = "hidden";
}

function tooltipMostrar(){
    document.querySelector('#tooltipEle1').style.visibility = "visible";
    document.querySelector('#tooltipEle2').style.visibility = "visible";
    document.querySelector('#tooltipEle3').style.visibility = "visible";
    document.querySelector('#tooltipEle4').style.visibility = "visible";
    document.querySelector('#tooltipEle5').style.visibility = "visible";
    document.querySelector('#tooltipEle6').style.visibility = "visible";
    document.querySelector('#tooltipEle7').style.visibility = "visible";
    document.querySelector('#tooltipEle8').style.visibility = "visible";
    document.querySelector('#tooltipEle9').style.visibility = "visible";
    document.querySelector('#tooltipEle10').style.visibility = "visible";
    document.querySelector('#tooltipEle11').style.visibility = "visible";
    document.querySelector('#tooltipEle12').style.visibility = "visible";
    document.querySelector('#tooltipEle13').style.visibility = "visible";
    document.querySelector('#tooltipEle14').style.visibility = "visible";
    document.querySelector('#tooltipEle15').style.visibility = "visible";
    document.querySelector('#tooltipEle16').style.visibility = "visible";
    document.querySelector('#tooltipEle17').style.visibility = "visible";
}
