function wait(duration) {
    return new Promise((resolve, reject) => {
        if (duration < 0) {
            reject(new Error("Time travel not yet implemented"));
        }
        setTimeout(resolve, duration);
    });
}

const promesa = wait(2000)
  .then(() => console.log("Ha pasado un segundo"))
  .catch((e) => console.log("Error: ", e));
console.log(promesa);

fetch("diccionario.txt")
  .then((result) => result.text())
  .then(processData);

function processData(result){
  let palabras = result.split("\n");
  console.log(palabras.length);
}

