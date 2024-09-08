const showColor = document.querySelector(".result");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const direction = document.querySelector("#direction");
const code = document.querySelector("#code");
const refresh = document.querySelector("#refresh");
const copycode = document.querySelector("#copycode");

color1.addEventListener("input",()=>{
    display();

})
color2.addEventListener("input",()=>{
    display();
})
direction.addEventListener("change",()=>{
    display();
})

const display = ()=>{
    showColor.style.background = `linear-gradient(${direction.value},${color1.value},${color2.value})`;
    code.value = `Background:linear-gradient(${direction.value},${color1.value},${color2.value});`;
    document.querySelector("body").style.background = `linear-gradient(${direction.value},${color1.value},${color2.value})`;
}

const generateColor = ()=>{
    const str = "abcdef1234567890";
    let color = "#";
    for(let i=0;i<6;i++){
        let index = Math.floor(Math.random() * str.length);
        color += str.charAt(index);
    }
    return color;
}

refresh.addEventListener("click",()=>{
    color1.value = generateColor();
    color2.value = generateColor();
    display();
})

copycode.addEventListener("click",()=>{
    code.select();
    document.execCommand("copy");
})



