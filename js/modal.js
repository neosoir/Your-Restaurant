//obtener todas la imagenes
let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

//obtener y mostrar las imagenes en la clase modal--open
for(let i = 0; i < imagenes.length; i++)
{
   imagenes[i].addEventListener('click', function(src_img){
    modal.classList.toggle("modal--open");
    let src = src_img.target.src;
    img.setAttribute("src",src);
   }); 
}

// El boton

boton.addEventListener('click',function(){
    modal.classList.toggle("modal--open")
});