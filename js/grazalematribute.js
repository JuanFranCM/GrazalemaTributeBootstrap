/****************************************************************/
/*                 Autor: Juan Francisco                        */
/*          JavaScript de GrazalemaTributeBootstrap             */
/****************************************************************/

function validacion(){
    let nombre = document.getElementById('nombre').value;
    /*Cogemos nodo completo si solo ponemos getelementbyID'nombre', es decir el hueco del formulario correspondiente 
    al nombre, junto con su estilo y todo, lo usamos como getter*/
  
    let apellidos = document.getElementById('apellidos').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let provincia = document.getElementById('provincia').value;
    let terminos = document.getElementById('terminos'); //getter sin value
  
    let correcto = true; //consideramos que de inicio formulario va a estar bien
  //Los errores de js tenemos que verlos en la consola en el apartado de herramientas para desarrolladores
  //terminal, ya que no podemos observar error directamente
    if (nombre=="" || (/^\s+$/.test(nombre)) || /[0-9]/.test(nombre) || !/[a-zñ]{2,}/i.test(nombre)){
      /*Si ponemos como condicion /[0-9]/ evitamos que haya un número en cualquier lugar, ya que no 
      especificamos el comienzo ^ ni el final $*/
      /*Usamos este getter como setter porque cambiamos valor del campo del estilo*/
      document.getElementById('nombreHelp').style.visibility="visible";
      document.getElementById('nombre').style.borderColor="red";
      correcto = false;
      // no debería volverse aquí return false;
  
    }
  
    //Necesario resetear algoritmo entre nombre y apellido para que si hay error en nombre no se mantenga en apellido
    if (apellidos=="" || (/^\s+$/.test(apellidos)) || /[0-9]/.test(apellidos) || !/[a-zñ' ]{2,}/i.test(apellidos)){
      /*Usamos este getter como setter porque cambiamos valor del campo del estilo*/
      document.getElementById('apellidosHelp').style.visibility="visible";
      document.getElementById('apellidos').style.borderColor="red";
      // no debería volverse aquí return false;
      correcto = false;
    }
  
    if (email=="" || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/){
      /*Usamos este getter como setter porque cambiamos valor del campo del estilo*/
      document.getElementById('emailHelp').style.visibility="visible";
      document.getElementById('email').style.borderColor="red";
      // no debería volverse aquí return false;
      correcto = false;
    }
  
    if (pass=="" || !/[A-ZÑ]+/.test(pass) || !/[a-zñ]+/.test(pass) || !/[0-9]+/.test(pass) || !/[.,;+-_&%$?¿¡!]+/.test(pass) || (pass.length>=8 && pass.lenght<=15)){
      /*Usamos este getter como setter porque cambiamos valor del campo del estilo*/
      document.getElementById('passHelp').style.visibility="visible";
      document.getElementById('pass').style.borderColor="red";
      // no debería volverse aquí return false;
      correcto = false;
    }
  
    if (provincia == 0){
      /*Usamos este getter como setter porque cambiamos valor del campo del estilo*/
      document.getElementById('provinciaHelp').style.visibility="visible";
      document.getElementById('provincia').style.borderColor="red";
      // no debería volverse aquí return false;
      correcto = false;
    }
  
    //No valido sexo porque pongo otro por defecto y asumo que no es informativo
  
    if (!terminos.checked){
      /*Usamos este getter como setter porque cambiamos valor del campo del estilo*/
      document.getElementById('terminosHelp').style.visibility="visible";
      // no debería volverse aquí return false;
      correcto = false;
    }
  
    return correcto
  
  }
  
  function resetear(id){
    document.getElementById(id+'Help').style.visibility="hidden"; // Concateno el id con 'Help' para que varíe la palabra
    document.getElementById(id).style.borderColor="lightgray";
  }

