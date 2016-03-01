'use strict';

$(init);



function init() {



  $('#getMovie').click(getMovie);
  
}



function  getMovie(){
   console.log('click')
  var $movieTitle = $('#titleInput').val();
  var $movieType = $('#typeOf').val();
  console.log($movieType)
  console.log($movieYear)
  var $movieYear = $('#yearOf').val();
  var url = `http://www.omdbapi.com/?t=${$movieTitle.split(" ").join("+")}&type=${$movieType}&y=${$movieYear}&r=json`;

  $.get(url)
  .success(function(data){
    console.log(data)
    var title = data.Title;
    var type = data.Type;
    var year = data.Year;
    var siteID = data.imdbID
    var posterURL = data.Poster;
    var posterImage = $('<img>').attr('src', posterURL);

console.log(siteID);


    $('#title').text(title);
    $('#year').text(year);
    $('#type').text(type);
    $('#poster').append(posterImage);
    $('siteID').text(siteID);

    if (data.Response==="False"){
      alert('movie not found');
    }

  })
  .error(function(err){
    console.log(err);
  });
}