const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const main = document.getElementById("main").style;
const copy = document.querySelector("p");


const p =document.querySelector('p');
let hex1 = "#ff6600"
let hex2 = "#41be0f"
// THIS IS GENERATE THE RANDOM COLOR
const hexColor =() =>{
    let color="1234567890abcdef"
    var clr = '#'
    for (let i = 0; i < 6; i++) {
      clr = clr + color[Math.floor(Math.random()*16)]
        
    }
    return clr
}
// TAKE A COLOR AND REPLACE IT 
const getColor = ()=>{
   let hex1 = hexColor();
   p.innerHTML= `background: linear-gradient( 90deg,${hex1},${hex2});`
   btn1.innerHTML= `${hex1}`
   main.backgroundImage = `linear-gradient( 90deg,${hex1},${hex2})`;
   
}
const getColor2 = ()=>{
    let hex2 = hexColor();
    p.innerHTML= `background: linear-gradient( 90deg,${hex1},${hex2});`
    main.backgroundImage = `linear-gradient( 90deg,${hex1},${hex2})`;
btn1.innerHTML= `${hex1}`
}
const copyText = () => {
navigator.clipboard.writeText(copy.innerHTML);
alert("copyed")
}


    
btn1.addEventListener("click",getColor);
btn2.addEventListener("click",getColor2);
copy.addEventListener("click",copyText);