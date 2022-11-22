let i = 0;

function download() {
  if (i == ) {
      i = 1;
      
      let bar = document.getElementById("progress_bar_2");
      let percent = document.getElementById("persent");
      let txt_info = document.getElementById("txt_info");
      let width = 0;
      let id = setInterval(frame, 35);
  
      function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
            txt_info.textContent = "Su archivo ya termino su proceso de descarga.";
        } else {
          width++;
          bar.style.width = width + "%";  // si
          percent.innerHTML = width + "%"; // si
          txt_info.textContent = "Has click en el Botón de Descarga.";
      }   
  }
}
