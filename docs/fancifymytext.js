const btn = document.getElementById("Bigger");

function bigger() {
    document.getElementById("textarea").style.fontSize = "24px";
};

function Moo () {
    str = MooHelper();
    console.log(str);
    document.getElementById("textarea").value = str;
}

function MooHelper() {
    let str = document.getElementById("textarea").value;
    str = str.toUpperCase();
    var periods = str.split(".");
    str = periods.join("-Moo.");
    return str;
}

function buttonChanged() {
    if(document.getElementById("fancySchmancy").checked) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.textDecoration = "underline";
        document.getElementById("textarea").style.color = "blue";
    } 
};

function boringBetty() {
    if(!document.getElementById("fancySchmancy").checked) {
        document.getElementById("textarea").style.fontWeight = "Normal";
        document.getElementById("textarea").style.textDecoration = "None";
        document.getElementById("textarea").style.color = "black";    
        
    }
}




// btn.addEventListener("click", helloWorld);