contador = 0;
var tables;
var $formulario = $('#form1');

    if($formulario.length){
        $formulario.validate({
            
            rules:{
                name: {
                    required: true,
                    alphanumeric: true,
                    minlength: 4,
                    maxlength: 30
                },
                email: {
                    required: true,
                    cemail: true
                },
                
                lname: {
                    required: true,
                    alphanumeric: true,
                    minlength: 4,
                    maxlength: 50
                },
                age: {
                    required: true,
                    number: true,
                    min: 0,
                    max: 150
                },
                tel: {
                    required: true,
                    phone: true,
                },
            },

            messages:{
                name: {
                    required: 'Ingrese su nombre!',
                    minlength: 'Ingrese un mínimo de {0}',
                    maxlength: 'Ingrese un máximo de {0}'
                    },

                    lname: {
                        required: 'Ingrese su apellido!',
                        minlength: 'Ingrese un mínimo de {0}',
                        maxlength: 'Ingrese un máximo de {0}'
                        },

                    email: {
                        required: 'Ingrese su correo!',
                        cemail: 'Ingrese un correo válido!'
                    },
                    
                    age: {
                        required: 'Ingrese su edad!',
                        min: 'Ingrese un mínimo de {0}',
                        max: 'Ingrese un máximo de {0}',
                        number: 'Ingrese solo números!'
                    },
                    tel: {
                        required: 'Ingrese su número de telefono!',
                        phone: 'Ingrese un número de telefono válido',  
                    }
            },
                
        });
    }


jQuery.validator.addMethod("cemail", function(value, element) { 
    return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Ingrese un correo válido!");

$.validator.addMethod( "alphanumeric", function(value, element ) {
    return this.optional( element ) || /^\w+$/i.test( value );
}, "Solo letras y números" );

jQuery.validator.addMethod('phone', function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, ''); 
    return this.optional(element) || phone_number.length > 7 &&
        phone_number.match(/^(\+?56)?(\s?)(0?9)(\s?)[987654]\d{7}$/);
}, 'Ingrese un número válido.');


$("#agregar").click(function(){
    if($formulario.valid()){
                
        name = $('#name')[0].value;
        lname = $('#lname')[0].value;
        email = $('#email')[0].value;
        age = $('#age')[0].value;
        tel = $('#tel')[0].value;  

        fila = '<tr><td>' + name + '</td><td>' + lname + '</td><td>' + email + '</td><td>' + age + '</td><td>' + tel + '</td></tr>'; 
            
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

