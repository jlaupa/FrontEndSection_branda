
var branda = branda || (function () {
      var  nombre, email, descripcion, error;
      var click = false;
      return {
          enviarMail: function(){
            nombre = $('#input1').val();
            email = $('#input2').val();
            descripcion = $('#input4').val();
            error = '';
            console.log('entro al bind');
            if (nombre == '') {
                error = 'Debe ingresar su nombre';
            }
            if (email == '') {
                error = 'Debe ingresar una dirección de correo';
            }
            if (descripcion == '') {
                error = 'Debe ingresar un mensaje';
            }
            console.log('click', click);
            if (error == '' && click == false) {
                click = true;
                $.ajax({
                    url: '../pruebabranda.php',
                    // url: 'http://localhost/alephoo_site/contact-form-submission.php',
                    type: 'POST',
                    async: true,
                    data: 'contact_name=' + nombre + '&contact_email=' + email + '&contact_message=' + descripcion
                }).done(
                    function (data) {
                        if (data == 'Debe ingresar una dirección de correo valida.') {
                        } else {
                            $('#error').html('<span style="background-color: transparent; border-radius: 3px; padding:5px;"><strong>' + data + '</strong></span>');
                            $('#error').css({'text-align': 'center'});
                            nombre = $('#input1').val('');
                            email = $('#input2').val('');
                            descripcion = $('#input4').val('');
                            $('.validate').hide();
                            $('.heading').append('<br><br>');
                            click = false;
                            console.log('click :', click);
                        }
                        ;
                    });

            } else {
                $('#error').html('<strong>' + error + '</strong>');
                $('#error').css({'text-align': 'center', 'border-radius': '3px'});

                if (error == 'Debe ingresar un mensaje') {
                    $('#input4').css({'border-color': '#a94442'});
                } else {
                    $('#input4').css({'border-color': '#336699'});
                }
                ;

                if (error == 'Debe ingresar una dirección de correo') {
                    $('#input2').css({'border-color': '#a94442'});
                } else {
                    $('#input2').css({'border-color': '#336699'});
                }
                ;

                if (error == 'Debe ingresar su nombre') {
                    $('#input1').css({'border-color': '#a94442'});
                } else {
                    $('#input1').css({'border-color': '#336699'});
                }
                ;
            }
        }
      }
    }());

