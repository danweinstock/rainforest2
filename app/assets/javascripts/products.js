$(document).on('ready page:load', function() {
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
    });
  }
   $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.getScript('/products?search=' + searchValue);

    // $.get('/products?search=' + searchValue)
    //   .done(function(data){
    //     console.log(data);
    //     $('#products').html(data);
    //   });
  });
});
// first way
//   function display_search_results() {
//     // readyState === 4 means that the asynchronous request completed successfully
//     if (this.readyState === 4) {
//       console.log(this);
//       document.getElementById('products').innerHTML = this.responseText;
//     }
//   }

//   var form = document.getElementById('search-form');
//   form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     var searchValue = document.getElementById('search').value;

//     var xhr = new XMLHttpRequest();
//     xhr.onload = display_search_results;
//     xhr.open('GET', '/products?search=' + searchValue, true);
//     xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//     xhr.send();
//   });
  // second way

  //   $.ajax({
  //     url: '/products?search=' + searchValue,
  //     type: 'GET',
  //     dataType: 'html'
  //   }).done(function(data){
  //     $('#products').html(data);
  //   });
  // });