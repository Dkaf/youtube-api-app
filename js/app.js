$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
})

function getRequest(searchTerm){
  var params = {
    part: '',
    key: 'AIzaSyD5mBcHDlTxWAURf-Oab6LuRhJpIVTVqrI',
    q: searchTerm
  };
  url = "https://www.googleapis.com/youtube/v3/search"

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}
