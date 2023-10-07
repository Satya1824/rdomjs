import { rdom } from "./index.js";

function Hello(){
    let a = document.createElement("h1");
    a.appendChild(document.createTextNode("Hel"));
    return a;
}

// mainapp.SyncChanges()
document.getElementById("main").appendChild(Hello());
// window.onhashchange = mainapp.SyncChanges;