$('.btn-shorten').on('click', function(){

  $.ajax({
    url: 'http://cors.io/?http://chuck-url.herokuapp.com/new/' + $("#url-field").val(),
    type: 'GET',
    dataType: 'JSON',
    success: function(data){
        var resultHTML = '<a class="result" href="' + data.short_url + '">'
            + data.short_url + '</a>';
        $('#link').html(resultHTML);
        $('#link').hide().fadeIn('slow');
    }
  });

});