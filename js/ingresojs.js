$(document).ready(function(){
   alert('naknda');
   
   $('[type="date"]').datepicker({
   dateFormat: 'dd/mm/yy',
    showAnim: "drop",
 
   nextText:"siguiente",
   prevText: "anterior" ,
    buttonImageOnly: true,
   changeYear: true,
   dayNamesMin: ["Do", "Lu", "Ma", "Mie", "Jue", "Vi", "Sa"],
   monthNamesShort: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Agos","Sep","Oct","Nov","Dic"],
   monthNames: ["Enero","Febrero","Marzo","Abril","May","Juni","Juli","Agost","Septiemb","Octubre","Noviembre","Diciembre"],
   onSelect: function(textoFecha, objDatepicker){
      $("#mensaje").html("<p>Has seleccionado: " + textoFecha + "</p>");
   }
});


   /**
   *funcionalidad del boton agregar archivo
   **/
   $("#agregaarchivo").click(function(){
      var $fila=$("<tr></tr>");
      var $columna1=$("<th>3</th>").addClass('columna1');
      var $columna2=$("<td></td>").addClass('columna2');
      var $columna3=$("<td></td>").addClass('columna3');
       
      //  elementos
      var $input=$("<input type='text' placeholder='separadas por ;' />");
      var $boton=$("<button  onclick='return false' class='small blue  mas_p'>\n\
            <span data-icon='p' class='icon' style='display: inline-block;'>\n\
                <span aria-hidden='true'>p</span></span></button>");
      
      
      /// asocia
      $columna3.append($input);
      $columna3.append($boton);
      
      $fila.append($columna1);
      $fila.append($columna2);
      $fila.append($columna3);
      
      $("#muestraarchivos").append($fila);//fin de boton agregar archivo -fuc click
   
   
      //agragando funcionalidad a cada elemento
      masPalabras($boton);
      miInput($input);
   });

   
   /**
   *adicion de palabras claves al archivo por medio del boton
   */
   function masPalabras(bton ){

    bton.click(
    function (){

        var padre= $(this).parent();
        var $contenido=$(this).prev()
        var contenido=$contenido.attr("value");  

        // valida palabra
        if(!/^[a-z,A-Z,0-9,ñ,_]+$/.test(contenido))
            {

            $("<div > solo se aceptan :<ul><li>letras a-z,A-Z,ñ</li> "
               +" <li>numeros 0-9 </li>"+
               " </ul></div>").dialog({title:'Error'});
            return false;
            }


        /// crea la palabra en el DOM     
        $nuevaPalabra=$("<button  class='small' onclick='return false'>"+
                                "<span class='icon small ' data-icon='x' style=' margin:0px 4px 0px 0px; display: inline-block; '>"+
                                    "<span aria-hidden='true'  >m</span></span><b style='color:#000;background:none;'>"+contenido+"</b> </button><br/>");
        $contenido.before($nuevaPalabra);

        $nuevaPalabra.click(
                function(event){

                $(this).next("br").remove();
                $(this).remove();
                }

            );

    // cambia la palabra
    $contenido.attr("value","");
    return false;
        }
    );
   }     
       
       
 
 /** adiciona palabra reservada con iput type=text
 */
function miInput(input){
 
   input.keypress(function(event){
     if ( event.which == 13 ) {
        //console.log($(this).next());
         $(this).next().click();
         return false;
    }
    
  });
   
}  
   
   
});
