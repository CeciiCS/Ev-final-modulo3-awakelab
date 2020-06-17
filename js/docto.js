$(document).on('ready', funcionclick);

function funcionclick(){
    $("#boton1").on('click',tabla);

    
	$("loans_table").on('click','.fa-eraser',deleteProduct);//eliminar fila cuando sellena la tabla
	$("loans_table").on('click','.fa-edit',editProduct); //editar

	$("body").on('click',".fa-eraser",deleteProduct);
	$("body").on('click',".fa-edit",editProduct);
}


function funcEliminarProductosso(){
	var a=this.parentNode.parentNode;
	var cantidad=a.getElementsByTagName("td")
	console.log(a);

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}


function deleteProduct(){
	var _this = this;
	var array_fila=getfilaseleccionada(_this);

	calculateTotals(array_fila[3],array_fila[4],array_fila[5],2)

	$(this).parent().parent().fadeOut("slow",function(){$(this).remove();});
}


function editProduct(){
	var _this = this;;
	var array_fila=getfilaseleccionada(_this);
	console.log(array_fila[0]+" - "+array_fila[1]+" - "+array_fila[2]+" - "+array_fila[3]+" - "+array_fila[4]+" - "+array_fila[5]+" - "+array_fila[6]+" - "+array_fila[7]);
	//Codigo de editar una fila lo pueden agregar aqui
}



function getfilaseleccionada(objectPressed){
	//Obteniendo la linea que se esta eliminando
	var a=objectPressed.parentNode.parentNode;
	//b=(fila).(obtener elementos de clase columna y traer la posicion 0).(obtener los elementos de tipo parrafo y traer la posicion0).(contenido en el nodo)
	var numero=a.getElementsByTagName("td")[0].getElementsByTagName("p")[0].innerHTML;
	var codigo=a.getElementsByTagName("td")[1].getElementsByTagName("p")[0].innerHTML;
	var descripcion=a.getElementsByTagName("td")[2].getElementsByTagName("p")[0].innerHTML;
	var cantidad=a.getElementsByTagName("td")[3].getElementsByTagName("p")[0].innerHTML;
	var precio=a.getElementsByTagName("td")[4].getElementsByTagName("p")[0].innerHTML;
	var subtotal=a.getElementsByTagName("td")[5].getElementsByTagName("p")[0].innerHTML;

	var array_fila = [numero, codigo, descripcion, cantidad, precio, subtotal];

	return array_fila;
	//console.log(numero+' '+codigo+' '+descripcion);
}



function tabla()
{
	var numero=document.getElementById("numero").value;
	var codigo=document.getElementById("codigo").value;
	var descripcion=document.getElementById("descripcion").value;
	var cantidad=document.getElementById("cantidad").value;
    var precio=document.getElementById("precio").value;
    var subtotal=parseFloat(cantidad)*parseFloat(precio);

	var name_table=document.getElementById("tabla_factura");

    var row = name_table.insertRow(0+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = '<p name="numero_f[]" class="non-margin">'+numero+'</p>';
    cell2.innerHTML = '<p name="codigo_p[]" class="non-margin">'+codigo+'</p>';
    cell3.innerHTML = '<p name="descuento_p[]" class="non-margin">'+descripcion+'</p>';
    cell4.innerHTML = '<p name="cantidad_p[]" class="non-margin">'+cantidad+'</p>';
    cell5.innerHTML = '<p name="precio_p[]" class="non-margin">'+precio+'</p>';
    cell6.innerHTML = '<p name="subtotal_p[]" class="non-margin">'+subtotal+'</p>';
    cell7.innerHTML = '<span class="icon fa-edit"></span><span class="icon fa-eraser"></span>';//iconos para borrar

    //Para calcular los totales enviando los parametros
    calculateTotals(cantidad, precio, subtotal, 1);
   
}


function calculateTotalsBySumColumn(){
	var total_cantidad=0;
	var array_cantidades=document.getElementsByName("cantidad_p[]");
	for (var i=0; i<array_cantidades.length; i++) {
		total_cantidad+=parseFloat(array_cantidades[i].innerHTML);
	}
	document.getElementById("total_catidad").innerHTML=total_cantidad;


	var total_precios=0;
	var array_precios=document.getElementsByName("precio_p[]");
	for (var i=0; i<array_precios.length; i++) {
		total_precios+=parseFloat(array_precios[i].innerHTML);
	}
	document.getElementById("total_precio").innerHTML=total_precios;


	var subtotales=0;
	var array_subtotales=document.getElementsByName("subtotal_p[]");
	for (var i=0; i<array_subtotales.length; i++) {
		subtotales+=parseFloat(array_subtotales[i].innerHTML);
	}
	document.getElementById("total_subtotales").innerHTML=subtotales;


}



function calculateTotals(cantidad, precio, subtotal, accion){
	//funcTotalsConParametro(cantidad, precio,subtotal,impuesto,total_n);
	var t_cantidad=parseFloat(document.getElementById("total_catidad").innerHTML);
	var t_precio=parseFloat(document.getElementById("total_precio").innerHTML);
	var t_subtotal=parseFloat(document.getElementById("total_subtotales").innerHTML);

	//accion=1		Sumarle al los totales
	//accion=2		Restarle al los totales
	if (accion==1) {
		document.getElementById("total_catidad").innerHTML=parseFloat(t_cantidad)+parseFloat(cantidad);
		document.getElementById("total_precio").innerHTML=parseFloat(t_precio)+parseFloat(precio);
		document.getElementById("total_subtotales").innerHTML=parseFloat(t_subtotal)+parseFloat(subtotal);
		
	}else if(accion==2){
		document.getElementById("total_catidad").innerHTML=parseFloat(t_cantidad)-parseFloat(cantidad);
		document.getElementById("total_precio").innerHTML=parseFloat(t_precio)-parseFloat(precio);
		document.getElementById("total_subtotales").innerHTML=parseFloat(t_subtotal)-parseFloat(subtotal);
	
	}else{
		alert('Accion Invalida');
	}
}



function format(input)
{
	var num = input.value.replace(/\,/g,'');
	if(!isNaN(num)){
		input.value = num;
	}
	else{ alert('Solo se permiten numeros');
		input.value = input.value.replace(/[^\d\.]*/g,'');
	}
}


