var nombreAutorLabel = document.getElementById('nombreAutorLabel').innerText;
var nombreProyectoLabel = document.getElementById('nombreProyectoLabel').innerText;

function getPDFFileButton () {
  return html2canvas($('#contenedor--pdf'), {
      background: "#ffffff",
      onrendered: function(canvas) {
          var myImage = canvas.toDataURL("image/jpeg,1.0");
          // Adjust width and height
          var imgWidth = (canvas.width * 40) / 240;
          var imgHeight = (canvas.height * 60) / 240;
          // jspdf changes
          var pdf = new jsPDF('l', 'mm', 'letter');
          var nombreAutor = document.getElementById('nombreAutor').value;
          var nombreProyecto = document.getElementById('nombreProyecto').value;
          pdf.setFontSize(12);
          pdf.text("Canvas Social", 130, 7);
          pdf.text(nombreAutorLabel + ' ' + nombreAutor, 20, 15);
          pdf.text(nombreProyectoLabel + ' ' + nombreProyecto, 20, 20);
          pdf.addImage(myImage, 'JPEG', 15, 25, imgWidth, imgHeight); // 2: 19
          pdf.save('CanvasSocial.pdf');
      }
  });
}      
$("#descargarPDF").on("click", function () {
  getPDFFileButton ()
});
