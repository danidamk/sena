/*js principal*/
/*js login*/ 
/*<> \*/ 
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/*rutas*/
/*app.get("/admin",(req,res)=>res.sendFile(__dirname + "/registro admin/registro.html"));*/

/*js para registro */
const Nombre = document.getElementById("Nombre");
const Email = document.getElementById("Email");
const Contraseña = document.getElementById("Contraseña");
const vcontraseña = document.getElementById("Validar Contraseña");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings =""   
    let entrar = false
  
    let regexEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5  }/
    parrafo.innerHTML = ""
    if(Nombre.value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }   
    if(regexEmail.test(Email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(Contraseña.value.length <8){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    
    })
    

   