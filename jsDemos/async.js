async function getWords() {
    console.log("Uno");
    const response = await fetch("diccionario.txt");
    console.log("Tres");
    const result = await response.text();
    console.log("Cuatro");
    let palabras = result.split("\n");
    console.log(palabras.length);
}
getWords();
console.log("Dos");