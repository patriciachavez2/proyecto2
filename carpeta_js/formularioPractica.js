
 
 function validarUsu () {
   console.log("Ingreso a validar usu")


   //obtiene el valor ingresado en el id user y lo trae para guardar en la variable
  
   let user =document.getElementById("user").value
   console.log(`user: ${user}`)

   //pide que incluya el @
   console.log (user.includes("@")) 

   if (!user.includes("@")) {
    console.log("El usuario debe contener @")

    //el innerhtml hace que yo pueda poner un mensaje que contenga texto directo desde js 
    document.getElementById("mensaje").innerHTML="El usuario debe contener @"

     //el class hace que pueda poner estilos desde js usando bootstrap
    document.getElementById("mensaje").className="bg-danger m-1 p-1 text-center rounded"
   
   
    //si no usara bootstrap la forma de poner estilos desde js seria 
    //document.getElementById("mensaje").style.color="red" y asi pondria el mensaje en letras rojas
   
    //opcion para que aparte de @ incluya codoAcodo.edu.ar
   } else if (!user.includes("codoAcodo.edu.ar")) {
    document.getElementById("mensaje").innerHTML="Debe contener el dominio codoAcodo.edu.ar"
    
  } else {
      document.getElementById("mensaje").innerHTML=""

      //cuando el usuario incluya el @ no se mostrara ningun mensaje en rojo por eso las comillas estan vacias
      document.getElementById("mensaje").className=""
   }
}

   

 