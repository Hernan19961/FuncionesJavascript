/* 
<div id= "ele1"> hello </div>
<script>
function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
}

ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

</script>


*/


// punto 3.1
let elemento = document.getElementById('ele1');
elemento.addEventListener('click', function() {
    ele1.style.backgroundColor = 'yellow'
})



// punto 3.2

let elemento1 = document.getElementById('ele2')
pintar();
ele2.addEventListener('click', () => {
    pintar('yellow')
})

function pintar (color = 'green') {
    ele2.style.backgroundColor = color
}


// punto 3.3

let elemento2 = document.getElementById('ele3')
ele3.addEventListener('click', () => {
    pintarDos()
} )

function pintarDos (color = 'green') {
    ele3.style.backgroundColor = color
}
