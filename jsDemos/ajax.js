const httpRequest = new XMLHttpRequest();
if (!httpRequest) {
  console.err("Giving up :( Cannot create an XMLHTTP instance");
} else {
  httpRequest.onreadystatechange = getData;
  httpRequest.open("GET", "diccionario.txt");
  httpRequest.send();
}
function getData() {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        let palabras = httpRequest.responseText.split("\n");
        console.log(palabras.length);
      } else { console.log("There was a problem with the request."); }
    }
  } catch (e) {
    alert(`Caught Exception: ${e.description}`);
  }
}
