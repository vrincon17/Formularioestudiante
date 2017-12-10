var estudiante = function(){
	var self = this;
     	self.idestudiante="";
     	self.nombre="";
        self.matricula="";
        self.identification="";
        self.telefono="";
        self.email="";
    };


			function presentar(){
			var	est1 = new estudiante();
			est1.idestudiante=document.getElementById("idestudiante").value;
			est1.nombre=document.getElementById("nestudiante").value;
			est1.matricula=document.getElementById("mestudiante").value;
			est1.identification=document.getElementById("idenestudiante").value;
			est1.telefono=document.getElementById("testudiante").value;
			est1.email=document.getElementById("emestudiante").value;
			console.log(est1);
}

//creando y capturando datos

	function tabla(est1){

		var	table = document.getElementById("estudiantetable");
		var tr =document.createElement("tr");
		var	tdid = document.createElement("td");
		var	tdnombre = document.createElement("td");
		var tdidentificacion=document.createElement("td");
		var	tdmatricula = document.createElement("td");
		var	tdtelefono = document.createElement("td");
		var	tdemail= document.createElement("td");



		var	txtid= document.createTextNode(est1.idestudiante);
		var	txtnombre= document.createTextNode(est1.nombre);
		var	txtidentificacion= document.createTextNode(est1.identificacion);
		var	txtmatricula= document.createTextNode(est1.matricula);
		var	txttelefono= document.createTextNode(est1.telefono);
		var	txtemail= document.createTextNode(est1.email);


		tdid.appendChild(txtid);
		tr.appendChild(tdid);
		tr.appendChild(tdnombre);
		tr.appendChild(tdidentificacion);
		tr.appendChild(tdmatricula);
		tr.appendChild(tdtelefono);
		tr.appendChild(tdemail);
		 table.appendChild(tr);
		
	}