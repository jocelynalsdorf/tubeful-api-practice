
$(function() {


  $("#search-form").submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    search(searchTerm);
  });


  function search(term) {

    var query = {
      key: "AIzaSyCdfadHd-MS-pAihYaStxo9-g6k9EMeYb0",
      part: "snippet",
      type:'video',
      q: term
    };

    $.getJSON("https://www.googleapis.com/youtube/v3/search", query, function(data) {
      console.log(data.items);
    });

  }

});
