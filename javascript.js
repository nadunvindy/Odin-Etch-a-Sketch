var sketchbooksize = 480;
var sketchdimension = 16;
var divdimension = '30px';

function removedivs(){
    for (var i = 0;i<sketchdimension**2;i++){
        const xdiv = document.querySelector('div'+i)
        xdiv.remove();
    }

}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


function createSquare(div){
    div.style.backgroundColor='white'
    div.style.height=divdimension;
    div.style.width=divdimension;
}

const sketchbook = document.querySelector('.sketchbook');

function generateSketch(dimension){
for(var i = 0; i < dimension**2; i++){
    const div = document.createElement('div'+i);
    createSquare(div);
    div.addEventListener('mouseover',()=>{
        div.style.backgroundColor=''+random_rgba();
    })
    sketchbook.appendChild(div);
}
}

generateSketch(sketchdimension);

function reset(){
    for (var i = 0;i<sketchdimension**2;i++){
        const xdiv = document.querySelector('div'+i)
        xdiv.style.backgroundColor='white';
    }

}

const resetbtn = document.querySelector('.reset')

resetbtn.addEventListener('click',()=>{
    reset()

})

const generatebtn = document.querySelector('.generate')

generatebtn.addEventListener('click',()=>{
    const dimension = prompt ("Please enter the grid dimension: ");
    if(dimension<100){
        removedivs();
        sketchdimension=dimension;
        divdimension = sketchbooksize/sketchdimension.toString()+ 'px'
        generateSketch(sketchdimension);}
    else{
        alert("Wrong Dimension");
    }
    
})


