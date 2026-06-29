 let inp=document.querySelector("input");
 let span=document.querySelector("span");
inp.addEventListener("input", fucntion(){
    span.textContent=inp.value.length;
    

});