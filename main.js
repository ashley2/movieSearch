'use strict';

$(init);



function init() {

  var popCorn = $('<div>').addClass('pop animated zoomIn')
  $('#popcorn').append(popCorn);


  $('#getMovie').click(getMovie);
  
}



function  getMovie(){

 var $movieTitle = $('#titleInput').val();
 var $movieType = $('#typeOf').val();
 var $movieYear = $('#yearOf').val();
 var url = `http://www.omdbapi.com/?t=${$movieTitle.split(" ").join("+")}&type=${$movieType}&y=${$movieYear}&r=json`;

 $.get(url)
 .success(function(data){

 
  $('#popcorn').remove();



  var title = data.Title;
  var type = data.Type;
  var year = data.Year;
  var siteID =  `<a href=http://www.imdb.com/title/${data.imdbID} >IMDb</a>`;
  var posterURL = data.Poster;
  var posterImage = $('<img>').attr('src', posterURL);




  $('#title').text(title);
  $('#year').text(year);
  $('#type').text(type);
  $('#poster').attr('src', posterURL);
  $('#poster').addClass('shadow');
  $('#siteID').html(siteID);



  if (data.Response==="False"){
    swal("Oops! Looks like we can't find this movie! Try another!");
  }

  $('#titleInput').val(' ');
  $('#yearOf').val(' ');


})
 .error(function(err){
  console.log(err);
});
}