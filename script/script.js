document.getElementById("mySelect").addEventListener("change", function() {
    var selectedValue = this.value;
    switch(selectedValue) {
        case "1":
            window.location.href = "tecnicoti.html";
            break;
        case "2":
            window.location.href = "tecnicocc.html";
            break;
        case "3":
            window.location.href = "tecnologoti.html";
            break;
        case "4":
            window.location.href = "tecnologocc.html";
            break;
        case "5":
            window.location.href = "pagina_cursos_cortos.html";
            break;
        default:
            alert("Por favor, seleccione una opción válida.");
    }
});


    

   