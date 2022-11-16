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