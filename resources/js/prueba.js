 
var estudiante = function(){
	var self = this;
     	self.idestudiant="";
     	self.nombre="";
        self.matricula="";
        self.identification="";
        self.telefono="";
        self.email="";
    };


function agregarestudiante(est){
	var	rowEstudiante = "<tr>"
	+"<td>"+"<td>"+"<input type=\"checkbox\" id=\"checkbox1\" value=\"Elminiar\" class=\"check\">"+"</td>"
	+"<td>"+ est.idestudiant
	+"<td>" +est.nombre
	+"<td>" +est.matricula
	+"<td>" +est.identification
	+"<td>" +est.telefono
	+"<td>" +est.email
	$("table").append (rowEstudiante);

/**/
};



 $(document).ready(function(){
 	myStorage = window.localStorage;

 	var dbestudiante = myStorage.getItem("estudiantes");
 		
 		if (dbestudiante != null){
 			estudiantes = JSON.parse (dbestudiante);
 			$.each(estudiantes, function(i,v){
 				agregarestudiante(v);
 			});
};
    		$("#agregar-estudiante").click(function(){
    			var	idestu = $('#idestudiante').val();
    			var	nameestu = $('#nestudiante').val();
    			var	mestu = $('#mestudiante').val();
    			var	identi = $('#idenestudiante').val();
    			var	telestu = $('#testudiante').val();
    			var	emestu = $('#emestudiante').val();

    			var est = new	estudiante();

    			est.idestudiant = idestu;
				est.nombre = nameestu;
    			est.matricula = mestu;
    			est.identificacion = identi;
    			est.telefono = telestu;
    			est.email = emestu;
    			
    			agregarestudiante(est);
    			guardardb(est);
		

       		});
  });


//comprobar si esl checkbox esta seleccionado
$(document).ready(function(){  
  
    $("#checkbox_comprobar").click(function() {  
        if($("#checkbox1").is(':checked')) {  
            localStorage.removeItem("estudiantes");
        } else {  
            alert("Debes seleccionar un estudiante");  
        }  
    });  
  
});  


$("#checkbox_comprobar").click(function() {
    
});


 function guardardb(est){

 		myStorage = window.localStorage;

 		var estudiantes =[];

 		var dbestudiante = myStorage.getItem("estudiantes");
 		if (dbestudiante != null){
 			estudiantes = JSON.parse (dbestudiante);

 		}
		estudiantes.push(est);
		myStorage.setItem("estudiantes",JSON.stringify(estudiantes));


 };
