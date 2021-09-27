const article = document.querySelectorAll("#section article");

for (let el of article){
    el.addEventListener("mouseenter", ()=>{
        el.querySelector("video").play();
    });
    el.addEventListener("mouseleave", ()=>{
        el.querySelector("video").pause();
    });
}
