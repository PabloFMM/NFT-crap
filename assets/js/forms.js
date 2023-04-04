var iframeCode = '<iframe class="overflow-scroll" src="https://gateway.ipfscdn.io/ipfs/QmQpHkDDWGJPBHFKkpX1DsfzvwZXQYNVoaW4R1Lhenp6T5/bundledrop.html?contract=0x82237B50Ef5Fe10Eb82aAe0672326703898f75ac&chainId=137&tokenId=0" width="700px" height="450px" style="max-width:100%; margin-top: 100px;" frameborder="0" scrolling="yes"></iframe>';

function validarRespuestas() {

  // Obtener las respuestas ingresadas por el usuario
  var respuesta1 = document.getElementById("respuesta1").value;
  var respuesta2 = document.getElementById("respuesta2").value;

  // Verificar si las respuestas son correctas (aquí puedes colocar las respuestas que esperas)
  if (respuesta1 === "respuesta1" && respuesta2 === "respuesta2") {
    // Mostrar el código del iframe en la página
    document.getElementById("myForm").innerHTML = iframeCode;

    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";
  } else {
    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}


document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault();
  validarRespuestas();
});
