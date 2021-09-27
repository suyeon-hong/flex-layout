const article = document.querySelectorAll("#section article");
const aside = document.querySelector("#aside");
const btn = aside.querySelector(".btn");

for (let el of article){
    el.addEventListener("mouseenter", ()=>{
        el.querySelector("video").play();
    });
    el.addEventListener("mouseleave", ()=>{
        el.querySelector("video").pause();
    });
    el.addEventListener("click", e=>{
        e.preventDefault();
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.classList.add("on");
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);
        aside.querySelector("video").play();
    })
    btn.addEventListener("click", e=>{
        e.preventDefault();

        aside.classList.remove("on");
        aside.querySelector("video").pause();
    })
}
