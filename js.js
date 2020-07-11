// getting data about columns and raws
const numOfRaws = prompt('How many rows/columns you want?', '50');
const n =  numOfRaws**2 ;
const container = document.querySelector(".container");


//contecting with css variable
let root = document.documentElement;
root.style.setProperty("--columns", numOfRaws);

//function makeSketch
function makeSketch (n) {
    let i=0;
    do {
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        div.setAttribute("id",(i+1));
       
        // random Background color
        // let x = Math.round(Math.random()*255);
        // let y = Math.round(Math.random()*255);
        // let z = Math.round(Math.random()*255);        
        // div.addEventListener('mouseover' , () => {
        //     div.style.background = `rgb(${x},${y},${z})`;
            
        // })


        // 10% black Background color
        let a=0.1;
        div.addEventListener('mouseover' , () => {
            div.style.background = `rgba(0, 0, 0, ${a})`;
            a+=0.1;
        })

        container.appendChild(div);
        i++;
    } while (i < n);
    
}

//activating function
makeSketch(n);


// button setup

let btn = document.querySelector("button");
btn.setAttribute("onclick" , "history.go(0)");


 

