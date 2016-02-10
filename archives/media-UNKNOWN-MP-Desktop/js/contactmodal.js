  // Modal JS
  $(function() {
    $("#contact-form").submit(function(e) {
      e.preventDefault();
      $form = $(this);
      $.post('/contact/validate/', $(this).serialize(), function(data) {
        if (data == "OK") {
	  window.scrollTo(0, 0);

          $.post('/contact/', $form.serialize(), function(data1) {
		  $( "#dialog-message" ).dialog({
//		    open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog || ui).hide(); },
		    modal: true,
		     buttons: {
		       Ok: function() {
		         $( this ).dialog( "close" );
			 window.location.href = '/';
		       }
		     }
		  });


          });
            $("input[type=text], textarea").val("");

          };
        if (data == "ERROR") {
          $("#contact-form").unbind();
          $("#contact-form").submit(); // this is triggering the form submit

        };

        //$('div.form-feedback').html(data);
      });
    }); 
  });

$(document).on('click','.ui-dialog-titlebar-close',function(){
 window.location.href = '/';
});
