if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("./sw.js")
    .then(reg => console.log("Registro Existoso"))
    .catch((rerr) => console.log(err));
}