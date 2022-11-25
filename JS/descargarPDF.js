
function getPDFFileButton () {
  return html2canvas($('#contenedor--pdf'), {
      background: "#ffffff",
      onrendered: function(canvas) {
          var myImage = canvas.toDataURL("image/jpeg,1.0");
          // Adjust width and height
          var imgWidth = (canvas.width * 47) / 240;
          var imgHeight = (canvas.height * 60) / 240;
          // jspdf changes
          var pdf = new jsPDF('l', 'mm', 'letter');
          pdf.text("Canvas Social", 130, 15, {align: 'center'});
          pdf.line(30, 20, 250, 20);
          pdf.addImage(myImage, 'JPEG', 15, 25, imgWidth, imgHeight); // 2: 19
          pdf.save('CanvasSocial.pdf');
      }
  });
}      
$("#descargarPDF").on("click", function () {
  getPDFFileButton ()
});
