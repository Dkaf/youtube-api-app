$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    q: searchTerm,
    key: 'AIzaSyD5mBcHDlTxWAURf-Oab6LuRhJpIVTVqrI'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}

$('.button').on('click', function(){
  $('#search-results').empty();
})

function showResults(results) {
  $.each(results, function(index, value){
      var thumbnail = $('<img>', {src: value.snippet.thumbnails.medium.url, class:'thumbnail'});
      var vidTitle = $('<span>' + value.snippet.title + '</span>')
      $('#search-results').append(thumbnail);
      $('#search-results').append(vidTitle).addClass('title');
      console.log(value.snippet.title);
  });
}
