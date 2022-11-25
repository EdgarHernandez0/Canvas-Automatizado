// ELEMENTOS DESACTIVADOS
document.getElementById('e1').style.backgroundColor = "gray";
document.getElementById('e2').style.backgroundColor = "gray";
document.getElementById('e3').style.backgroundColor = "gray";
document.getElementById('e4').style.backgroundColor = "gray";
document.getElementById('e6').style.backgroundColor = "gray";
document.getElementById('e7').style.backgroundColor = "gray";
document.getElementById('e8').style.backgroundColor = "gray";
document.getElementById('e9').style.backgroundColor = "gray";
document.getElementById('e10').style.backgroundColor = "gray";
document.getElementById('e11').style.backgroundColor = "gray";
document.getElementById('e12').style.backgroundColor = "gray";
document.getElementById('e15').style.backgroundColor = "gray";
document.getElementById('e16').style.backgroundColor = "gray";
document.getElementById('e17').style.backgroundColor = "gray";

// SECCION 1
// ACTIVAR SECCION 1
function activarSeccion1(){
    document.getElementById('e1').style.backgroundColor = "white";
    document.getElementById('e2').style.backgroundColor = "white";
    document.getElementById('e3').style.backgroundColor = "white";

    desactivarSeccion2();
    desactivarSeccion3();
    desactivarSeccion4();
    desactivarSeccion5();
    desactivarTerminado();

    document.getElementById('fase1').style.backgroundColor = "#87d5f9";
}
// DESACTIVAR SECCION 1
function desactivarSeccion1(){
    document.getElementById('e1').style.backgroundColor = "gray";
    document.getElementById('e2').style.backgroundColor = "gray";
    document.getElementById('e3').style.backgroundColor = "gray";

    document.getElementById('fase1').style.backgroundColor = "gray";
}

// SECCION 2
// ACTIVAR SECCION 2
function activarSeccion2(){
    document.getElementById('e4').style.backgroundColor = "white";
    document.getElementById('e9').style.backgroundColor = "white";
    document.getElementById('e12').style.backgroundColor = "white";

    desactivarSeccion1();
    desactivarSeccion3();
    desactivarSeccion4();
    desactivarSeccion5();
    desactivarTerminado();

    document.getElementById('fase2').style.backgroundColor = "#87d5f9";
}
// DESACTIVAR SECCION 2
function desactivarSeccion2(){
    document.getElementById('e4').style.backgroundColor = "gray";
    document.getElementById('e9').style.backgroundColor = "gray";
    document.getElementById('e12').style.backgroundColor = "gray";

    document.getElementById('fase2').style.backgroundColor = "gray";
}

// SECCION 3
// ACTIVAR SECCION 3
function activarSeccion3(){
    document.getElementById('e10').style.backgroundColor = "white";
    document.getElementById('e11').style.backgroundColor = "white";

    desactivarSeccion1();
    desactivarSeccion2();
    desactivarSeccion4();
    desactivarSeccion5();
    desactivarTerminado();

    document.getElementById('fase3').style.backgroundColor = "#87d5f9";
}
// DESACTIVAR SECCION 3
function desactivarSeccion3(){
    document.getElementById('e10').style.backgroundColor = "gray";
    document.getElementById('e11').style.backgroundColor = "gray";

    document.getElementById('fase3').style.backgroundColor = "gray";
}

// SECCION 4
// ACTIVAR SECCION 4
function activarSeccion4(){
    document.getElementById('e6').style.backgroundColor = "white";
    document.getElementById('e7').style.backgroundColor = "white";
    document.getElementById('e8').style.backgroundColor = "white";

    desactivarSeccion1();
    desactivarSeccion2();
    desactivarSeccion3();
    desactivarSeccion5();
    desactivarTerminado();

    document.getElementById('fase4').style.backgroundColor = "#87d5f9";
}
// DESACTIVAR SECCION 4
function desactivarSeccion4(){
    document.getElementById('e6').style.backgroundColor = "gray";
    document.getElementById('e7').style.backgroundColor = "gray";
    document.getElementById('e8').style.backgroundColor = "gray";

    document.getElementById('fase4').style.backgroundColor = "gray";
}

// SECCION 5
// ACTIVAR SECCION 5
function activarSeccion5(){
    document.getElementById('e15').style.backgroundColor = "white";
    document.getElementById('e16').style.backgroundColor = "white";
    document.getElementById('e17').style.backgroundColor = "white";

    desactivarSeccion1();
    desactivarSeccion2();
    desactivarSeccion3();
    desactivarSeccion4();
    desactivarTerminado();

    document.getElementById('fase5').style.backgroundColor = "#87d5f9";
}
// DESACTIVAR SECCION 5
function desactivarSeccion5(){
    document.getElementById('e15').style.backgroundColor = "gray";
    document.getElementById('e16').style.backgroundColor = "gray";
    document.getElementById('e17').style.backgroundColor = "gray";

    document.getElementById('fase5').style.backgroundColor = "gray";
}

// CANVAS TERMINADO
function activarSecciones(){
document.getElementById('e1').style.backgroundColor = "white";
document.getElementById('e2').style.backgroundColor = "white";
document.getElementById('e3').style.backgroundColor = "white";
document.getElementById('e4').style.backgroundColor = "white";
document.getElementById('e6').style.backgroundColor = "white";
document.getElementById('e7').style.backgroundColor = "white";
document.getElementById('e8').style.backgroundColor = "white";
document.getElementById('e9').style.backgroundColor = "white";
document.getElementById('e10').style.backgroundColor = "white";
document.getElementById('e11').style.backgroundColor = "white";
document.getElementById('e12').style.backgroundColor = "white";
document.getElementById('e15').style.backgroundColor = "white";
document.getElementById('e16').style.backgroundColor = "white";
document.getElementById('e17').style.backgroundColor = "white";

document.getElementById('terminado').style.backgroundColor = "#87d5f9";
document.getElementById('fase1').style.backgroundColor = "gray";
document.getElementById('fase2').style.backgroundColor = "gray";
document.getElementById('fase3').style.backgroundColor = "gray";
document.getElementById('fase4').style.backgroundColor = "gray";
document.getElementById('fase5').style.backgroundColor = "gray";

}

function desactivarTerminado(){
    document.getElementById('terminado').style.backgroundColor = "gray";
}