function doSomething() {
    var inp = document.getElementById("txt-in").value;
    // console.log(inp);
    document.getElementById("head").innerHTML = "Hello " + inp;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", doSomething);