let balls = document.getElementsByClassName('ball'); // On prend un noeud et pas qu'un ID

document.onmousemove = function()  { // à chaque fois qu'on bouge la souris, une fonction se lance

let x = event.clientX * 100 / window.innerWidth + "%";
let y = event.clientY * 100 / window.innerHeight + "%";

for(let i = 0; i < 2; i ++) { // let = à x
balls[i].style.left = x;
balls[i].style.right = y; // se lit balls de 
balls[i].style.top = y;
balls[i].style.transform = "translate(-" + x + "," + y + ")"; // sans cette condition, les yeux ne suivraient pas la souris
}

// associer la possition des yeux par rapport à X Y


console.log("x =" + x); // Donne la position X et Y !
console.log("y =" + y);

}
// ClientX = position de l'utilisateurice de la souris sur x
// Divisée par la largeur du browser, qui donne la position exacte sur X
// On a besoin de la position Y également


