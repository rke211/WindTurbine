	  function checkNumber(number) {
	    $('#loader').removeClass("d-none");
	    $.ajax({
	      type: "GET",
	      dataType: 'json',
	      url: 'number.php?number=' + number,
	      success: function (obj) {
	        var string = false;
	        var format = 'success';

	        if (obj.coating) {
	          string = 'Coating Damage';
	          format = 'warning';
	        }

	        if (obj.lightning) {
	          if (obj.coating === true) {
	            string += ' and ';
	            format = 'danger';
	          } else {
	            format = 'warning';
	            string = '';
	          }
	          string += 'Lightning Strike';
	        }
	        $('#loader').addClass("d-none");
	        $('#results').append('<div class="text-' + format + '">' + (!string ? number : string) + '</div>');

	        setTimeout(function () {
	          if (number < 100) {
	            checkNumber(number + 1);
	          } else {
	            $('#results').append('<div class="alert alert-success my-2">Checking Completed.</div>');
	          }
	        }, 300);
	      },
	      error: function (jqXHR, textStatus, errorThrown) {
	        $('#results').append('<div class="alert alert-danger">The script could not continue checking: ' + errorThrown + '</div>');
	        $('#loader').addClass("d-none");
	      }
	    });
	    $("html, body").animate({
	      scrollTop: $(document).height()
	    }, "fast");

	  }
	  $(document).ready(function () {
	    checkNumber(1);
	  });
