contador = 0;
var tables;
var $formulario = $('#form1');

/*INGRESO INFO TORTAS CLÁSICAS Y ESPECIALES */
    if($formulario.length){
        $formulario.validate({
            
            rules:{
                torta: {
                    required: true,
                    lettersonly: true,
                    minlength: 4,
                    maxlength: 50
                },
                sabor: {
                    required: true,
                    lettersonly: true,
                    minlength: 4,
                    maxlength: 50
                },
                
                cant: {
                    required: true,
                    number: true,
                    min: 0,
                    max: 50
                },
                stock: {
                    required: true,
                    number: true,
                    min: 0,
                    max: 30
                },
                precio: {
                    required: true,
                    number: true,
                    min: 100,
                    max: 150000
                },
            },

            messages:{
                torta: {
                    required: 'Ingrese tipo de torta!',
                    minlength: 'Ingrese un mínimo de {0}',
                    maxlength: 'Ingrese un máximo de {0}'
                    },

                    sabor: {
                        required: 'Ingrese sabor!',
                        minlength: 'Ingrese un mínimo de {0}',
                        maxlength: 'Ingrese un máximo de {0}'
                        },

                    cant: {
                        required: 'Ingrese porciones!',
                        min: 'Ingrese un mínimo de {0}',
                        max: 'Ingrese un máximo de {0}',
                        number: 'Ingrese solo números!'
                    },
                    
                    stock: {
                        required: 'Ingrese stock disponible!',
                        min: 'Ingrese un mínimo de {0}',
                        max: 'Ingrese un máximo de {0}',
                        number: 'Ingrese solo números!'
                    },
                    precio: {
                        required: 'Ingrese precio (pesos chilenos)!',
                        min: 'Ingrese un mínimo de {0}',
                        max: 'Ingrese un máximo de {0}',
                        number: 'Ingrese precio ($)' 
                    }
            },
                
        });
    }

    
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
   }, "Solo letras");

   jQuery.validator.addMethod("number", function(value, element) {
        return this.optional(element) || /^([0-9]{0,50})+$/i.test(value);
    }, "Solo números");


    
    $("#agregar").click(function(){
        if($formulario.valid()){
                    
            torta = $('#torta')[0].value;
            sabor = $('#sabor')[0].value;
            cant = $('#cant')[0].value;
            stock = $('#stock')[0].value;
            precio = $('#precio')[0].value;  
    
            fila = '<tr><td>' + torta + '</td><td>' + sabor + '</td><td>' + cant + '</td><td>' + stock + '</td><td>' + precio + '</td></tr>'; 
                
            $('#mytable tr:first').after(fila);
            $('#form1')[0].reset();
            
            contador++;
            if(contador === 1){
                tables = $("table").tableExport({
                    bootstrap: false,
                    formats: ["xlsx", "csv", "txt"]
                });
            }else if(contador > 1){
                tables.reset();
            }
        }else{
            alert("Faltan datos");
        }
    });

/*INGRESO INFO HOJARASCA */
if($formulario.length){
    $formulario.validate({
        
        rules:{
            hojarasca: {
                required: true,
                lettersonly: true,
                minlength: 4,
                maxlength: 50
            },
            relleno: {
                required: true,
                lettersonly: true,
                minlength: 4,
                maxlength: 50
            },
            
            cant: {
                required: true,
                number: true,
                min: 0,
                max: 50
            },
            stock: {
                required: true,
                number: true,
                min: 0,
                max: 30
            },
            precio: {
                required: true,
                number: true,
                min: 100,
                max: 150000
            },
        },

        messages:{
            hojarasca: {
                required: 'Ingrese tipo de torta!',
                minlength: 'Ingrese un mínimo de {0}',
                maxlength: 'Ingrese un máximo de {0}'
                },

                relleno: {
                    required: 'Ingrese sabor!',
                    minlength: 'Ingrese un mínimo de {0}',
                    maxlength: 'Ingrese un máximo de {0}'
                    },

                cant: {
                    required: 'Ingrese porciones!',
                    min: 'Ingrese un mínimo de {0}',
                    max: 'Ingrese un máximo de {0}',
                    number: 'Ingrese solo números!'
                },
                
                stock: {
                    required: 'Ingrese stock disponible!',
                    min: 'Ingrese un mínimo de {0}',
                    max: 'Ingrese un máximo de {0}',
                    number: 'Ingrese solo números!'
                },
                precio: {
                    required: 'Ingrese precio (pesos chilenos)!',
                    min: 'Ingrese un mínimo de {0}',
                    max: 'Ingrese un máximo de {0}',
                    number: 'Ingrese precio ($)' 
                }
        },
            
    });
}


jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
}, "Solo letras");

jQuery.validator.addMethod("number", function(value, element) {
    return this.optional(element) || /^([0-9]{0,50})+$/i.test(value);
}, "Solo números");



$("#agregar").click(function(){
    if($formulario.valid()){
                
        hojarasca = $('#hojarasca')[0].value;
        relleno = $('#relleno')[0].value;
        cant = $('#cant')[0].value;
        stock = $('#stock')[0].value;
        precio = $('#precio')[0].value;  

        fila = '<tr><td>' + hojarasca + '</td><td>' + relleno + '</td><td>' + cant + '</td><td>' + stock + '</td><td>' + precio + '</td></tr>'; 
            
        $('#mytable tr:first').after(fila);
        $('#form2')[0].reset();
        
        contador++;
        if(contador === 1){
            tables = $("table").tableExport({
                bootstrap: false,
                formats: ["xlsx", "csv", "txt"]
            });
        }else if(contador > 1){
            tables.reset();
        }
    }else{
        alert("Faltan datos");
    }
});