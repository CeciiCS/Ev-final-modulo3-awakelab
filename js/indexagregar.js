var tables;
var $formulario = $('#form1');

    if($formulario.length){
        $formulario.validate({
            
            rules:{
                name: {
                    minlength: 4,
                    maxlength: 30
                },
                email: {
                    cemail: true
                },
                
                lname: {
                    minlength: 4,
                    maxlength: 100
                },
               
                tel: {
                    required: true,
                    phone: true,
                },
            },

            messages:{
                name: {
                    minlength: 'Ingrese un mínimo de {0}',
                    maxlength: 'Ingrese un máximo de {0}'
                    },

                    lname: {
                        minlength: 'Ingrese un mínimo de {0}',
                        maxlength: 'Ingrese un máximo de {0}'
                        },

                    email: {
                        cemail: 'Ingrese un correo válido!'
                    },
                    
                    tel: {
                        required: 'Ingrese número de telefono',
                        phone: 'Ingrese un número de telefono válido',  
                    }
            },
                
        });
    }

jQuery.validator.addMethod("cemail", function(value, element) { 
    return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Ingrese un correo válido!");



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
        tel = $('#tel')[0].value;  
            var i = 1;
        fila = '<tr id="row' + i + '"><td>' + name + '</td><td>' + lname + '</td><td>' + email + '</td><td>' + tel + '</td></tr>'; 
            i++;
        //
            $('#mytable tr:first').after(fila);
        //
        //
            $('#form1')[0].reset();
        //
    }else{
        alert("Faltan datos");
    }
});

