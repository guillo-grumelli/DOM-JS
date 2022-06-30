// let boton=document.querySelector("button")
// console.log(boton)

// let texto=document.querySelector("#text")
// console.log(texto)

//boton.addEventListener("click",function() {console.log('hola')})
//boton.addEventListener("mouseover",function() {console.log('hola')})
//boton.addEventListener("click",function() {texto.textContent="hola"})

// let botonNumberUser=document.querySelector('#mostrar')

// function numero(){
//     let numberUser=document.querySelector('#numeroUsuario').value 
//     console.log(parseInt(numberUser))
// }

// botonNumberUser.addEventListener("click",numero)

 let boton2=document.querySelector("#calcular")

 function calcular () {
     let n1=document.querySelector(".numero1").value
     let n2=document.querySelector(".numero2").value
     let resultado=document.getElementById("resultado")

     let multiplicar= parseInt(n1*n2) 
    resultado.textContent=multiplicar 
     console.log(multiplicar)  
 }
 
 boton2.addEventListener("click",calcular)
 console.log(calcular)

