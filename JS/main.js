// const openModal = document.querySelector('.agregar_info');
// const modal = document.querySelector('.modal');
// const closeModal =document.querySelector('.modal_close');

// openModal.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.classList.add('modal--show');
//     tooltipOcultar();
// });

// closeModal.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.classList.remove('modal--show');
//     tooltipMostrar();
// });

// FORMULARIO OBJETIVO
const formulario_obj = document.querySelector('#form_obj');
const abrir_modal_obj = document.getElementById('agregar_obj');
const modal_obj = document.getElementById('modal_obj');
const cerrar_modal_obj = document.getElementById('cerrar_modal_obj');

abrir_modal_obj.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_obj.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_obj.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_obj.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_obj.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_obj").value
    
    const respuesta = document.querySelector("#respuesta_obj");
    respuesta.textContent = `${descripcion}`

    modal_obj.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO VISION UTOPICA
const formulario_vis = document.querySelector('#form_vis');
const abrir_modal_vis = document.getElementById('agregar_vis');
const modal_vis = document.getElementById('modal_vis');
const cerrar_modal_vis = document.getElementById('cerrar_modal_vis');

abrir_modal_vis.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_vis.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_vis.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_vis.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_vis.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_vis").value
    
    const respuesta = document.querySelector("#respuesta_vis");
    respuesta.textContent = `${descripcion}`

    modal_vis.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO IMPACTO
const formulario_impacto = document.querySelector('#form_impacto');
const abrir_modal_imp = document.getElementById('agregar_imp');
const modal_imp = document.getElementById('modal_imp');
const cerrar_modal_imp = document.getElementById('cerrar_modal_imp');

abrir_modal_imp.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_imp.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_imp.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_imp.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_impacto.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_impacto").value
    
    const respuesta = document.querySelector("#respuesta_impacto");
    respuesta.textContent = `${descripcion}`

    modal_imp.classList.remove('modal--show');
});

// FORMULARIO PROBLEMA NECESIDAD
const formulario_problema = document.querySelector('#form_problema');
const abrir_modal_prob = document.getElementById('agregar_prob');
const modal_prob = document.getElementById('modal_prob');
const cerrar_modal_prob = document.getElementById('cerrar_modal_prob');

abrir_modal_prob.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_prob.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_prob.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_prob.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_problema.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_problema").value
    
    const respuesta = document.querySelector("#respuesta_problema");
    respuesta.textContent = `${descripcion}`

    modal_prob.classList.remove('modal--show');
});

// FORMULARIO ALTERNATIVAS EXISTENTES
const formulario_alternativas = document.querySelector('#form_alternativas');
const abrir_modal_alt = document.getElementById('agregar_alt');
const modal_alt = document.getElementById('modal_alt');
const cerrar_modal_alt = document.getElementById('cerrar_modal_alt');

abrir_modal_alt.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_alt.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_alt.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_alt.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_alternativas.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_alternativas").value
    
    const respuesta = document.querySelector("#respuesta_alternativas");
    respuesta.textContent = `${descripcion}`

    modal_alt.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO ACTIVIDADES CLAVE
const formulario_actividades = document.querySelector('#form_actividades');
const abrir_modal_act = document.getElementById('agregar_act');
const modal_act = document.getElementById('modal_act');
const cerrar_modal_act = document.getElementById('cerrar_modal_act');

abrir_modal_act.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_act.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_act.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_act.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_actividades.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_actividades").value
    
    const respuesta = document.querySelector("#respuesta_actividades");
    respuesta.textContent = `${descripcion}`

    modal_act.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO ALIANZAS CLAVE
const formulario_alianzas = document.querySelector('#form_alianzas');
const abrir_modal_ali = document.getElementById('agregar_ali');
const modal_ali = document.getElementById('modal_ali');
const cerrar_modal_ali = document.getElementById('cerrar_modal_ali');

abrir_modal_ali.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_ali.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_ali.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_ali.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_alianzas.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_alianzas").value
    
    const respuesta = document.querySelector("#respuesta_alianzas");
    respuesta.textContent = `${descripcion}`

    modal_ali.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO RECURSOS CLAVE
const formulario_recursos = document.querySelector('#form_recursos');
const abrir_modal_rec = document.getElementById('agregar_rec');
const modal_rec = document.getElementById('modal_rec');
const cerrar_modal_rec = document.getElementById('cerrar_modal_rec');

abrir_modal_rec.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_rec.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_rec.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_rec.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_recursos.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_recursos").value
    
    const respuesta = document.querySelector("#respuesta_recursos");
    respuesta.textContent = `${descripcion}`

    modal_rec.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO PROPUESTA DE VALOR
const formulario_propuesta = document.querySelector('#form_propuesta');
const abrir_modal_prop = document.getElementById('agregar_prop');
const modal_prop = document.getElementById('modal_prop');
const cerrar_modal_prop = document.getElementById('cerrar_modal_prop');

abrir_modal_prop.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_prop.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_prop.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_prop.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_propuesta.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_propuesta").value
    
    const respuesta = document.querySelector("#respuesta_propuesta");
    respuesta.textContent = `${descripcion}`

    modal_prop.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO C. COMUNICACION
const formulario_comunicacion = document.querySelector('#form_comunicacion');
const abrir_modal_comu = document.getElementById('agregar_comu');
const modal_comu = document.getElementById('modal_comu');
const cerrar_modal_comu = document.getElementById('cerrar_modal_comu');

abrir_modal_comu.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_comu.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_comu.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_comu.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_comunicacion.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_comunicacion").value
    
    const respuesta = document.querySelector("#respuesta_comunicacion");
    respuesta.textContent = `${descripcion}`

    modal_comu.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO C. DISTRIBUCION
const formulario_distribucion = document.querySelector('#form_distribucion');
const abrir_modal_dis = document.getElementById('agregar_dis');
const modal_dis = document.getElementById('modal_dis');
const cerrar_modal_dis = document.getElementById('cerrar_modal_dis');

abrir_modal_dis.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_dis.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_dis.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_dis.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_distribucion.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_distribucion").value
    
    const respuesta = document.querySelector("#respuesta_distribucion");
    respuesta.textContent = `${descripcion}`

    modal_dis.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO USUARIOS 
const formulario_usuarios = document.querySelector('#form_usuarios');
const abrir_modal_usu = document.getElementById('agregar_usu');
const modal_usu = document.getElementById('modal_usu');
const cerrar_modal_usu = document.getElementById('cerrar_modal_usu');

abrir_modal_usu.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_usu.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_usu.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_usu.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_usuarios.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_usuarios").value
    
    const respuesta = document.querySelector("#respuesta_usuarios");
    respuesta.textContent = `${descripcion}`

    modal_usu.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO CLIENTES
const formulario_clientes = document.querySelector('#form_clientes');
const abrir_modal_cli = document.getElementById('agregar_cli');
const modal_cli = document.getElementById('modal_cli');
const cerrar_modal_cli = document.getElementById('cerrar_modal_cli');

abrir_modal_cli.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_cli.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_cli.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_cli.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_clientes.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_clientes").value
    
    const respuesta = document.querySelector("#respuesta_clientes");
    respuesta.textContent = `${descripcion}`

    modal_cli.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO BENEFICIARIOS
const formulario_beneficiarios = document.querySelector('#form_beneficiarios');
const abrir_modal_bene = document.getElementById('agregar_bene');
const modal_bene = document.getElementById('modal_bene');
const cerrar_modal_bene = document.getElementById('cerrar_modal_bene');

abrir_modal_bene.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_bene.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_bene.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_bene.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_beneficiarios.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_beneficiarios").value
    
    const respuesta = document.querySelector("#respuesta_beneficiarios");
    respuesta.textContent = `${descripcion}`

    modal_bene.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO ESTRUCTURA DE COSTOS
const formulario_estructura = document.querySelector('#form_estructura');
const abrir_modal_estr = document.getElementById('agregar_estr');
const modal_estr = document.getElementById('modal_estr');
const cerrar_modal_estr = document.getElementById('cerrar_modal_estr');

abrir_modal_estr.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_estr.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_estr.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_estr.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_estructura.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_estructura").value
    
    const respuesta = document.querySelector("#respuesta_estructura");
    respuesta.textContent = `${descripcion}`

    modal_estr.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO EXCEDENTES
const formulario_excedentes = document.querySelector('#form_excedentes');
const abrir_modal_exce = document.getElementById('agregar_exce');
const modal_exce = document.getElementById('modal_exce');
const cerrar_modal_exce = document.getElementById('cerrar_modal_exce');

abrir_modal_exce.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_exce.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_exce.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_exce.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_excedentes.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_excedentes").value
    
    const respuesta = document.querySelector("#respuesta_excedentes");
    respuesta.textContent = `${descripcion}`

    modal_exce.classList.remove('modal--show');
    tooltipMostrar();
});

// FORMULARIO FUENTES DE INGRESOS
const formulario_fuentes = document.querySelector('#form_fuentes');
const abrir_modal_fue = document.getElementById('agregar_fue');
const modal_fue = document.getElementById('modal_fue');
const cerrar_modal_fue = document.getElementById('cerrar_modal_fue');

abrir_modal_fue.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_fue.classList.add('modal--show');
    tooltipOcultar();
});

cerrar_modal_fue.addEventListener('click', (e)=>{
    e.preventDefault();
    modal_fue.classList.remove('modal--show');
    tooltipMostrar();
});

formulario_fuentes.addEventListener("submit", ()=>{
    const descripcion = document.querySelector("#descripcion_fuentes").value
    
    const respuesta = document.querySelector("#respuesta_fuentes");
    respuesta.textContent = `${descripcion}`

    modal_fue.classList.remove('modal--show');
    tooltipMostrar();
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
