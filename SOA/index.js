$(document).ready(function() {
   $("form").mouseover(function(){
    $("#search").css("display","inline")
    }).mouseout(function(){
        $("#search").css("display","none")
    })
 });

class System{
    constructor(){
        this.search = "";
    }
    Search = () =>{
        $(".btn").click(function(){
            this.search = $("#search").val();
            switch(this.search){
                case "iniciar sesion":
                case "registrarse": 
                case "iniciar":
                case "entrar":
                    window.location.href = "./pages/session.html";
                    break;
                case "lector":
                    window.location.href = "./pages/lector.html";
                    break;
                case "ir a la pagina del colegio":
                case "mas informacion":
                case "colegio":
                    window.location.href = "https://www.ierepublicadehonduras.edu.co/"
                    break;
                case "contactanos":
                case "contactar":
                case "redes sociales":
                case "whatsApp":
                    window.location.href = "./pages/about.html" 
                    break;
            }
        })   
        
    }
}
const sys = new System();
$(document).ready(function(){
    sys.Search();
})