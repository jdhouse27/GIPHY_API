var comedians = ["Adam Sandler", "Will Ferrell", "Chris Farley", "Jimmy Fallon", "Tina Fey", "Chevy Chase", "Bill Murray", "Amy Schumer"];

  function returnGiphys() {
    //this variable will capture the the object we want to return from our GIPHY API
    var giphy = $(this).attr("data-name");
        
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WvXITKaWXq8GVGQWItBeVODmGEiTEjsw&q="
         + giphy + "&limit=10&offset=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      var results = response.data;
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        
        var gifDiv = $("<div>");
        gifDiv.addClass("giphyImg")
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var comediansImage = $("<img>");
        comediansImage.attr("src", results[i].images.fixed_height.url);        
        gifDiv.append(comediansImage);
        gifDiv.append(p);
  
        $("#images").prepend(gifDiv);
       };
      });
    }

  //this should allow user to click on giphy to pause or start it back up.
  $("#images").on("click", function() {
    var state = comediansImage;
      if (state === response.images.fixed_height.url) {
        $("#images").attr("src", response.images.fixed_height.url);
      } else {
        $("#images").attr("src", response.images.fixed_height_still.url);
      }
});    
      
  function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < comedians.length; i++) {
        
      var a = $("<button>");
       a.addClass("comedians");
       a.attr("data-name", comedians[i]);
       a.text(comedians[i]);
       $("#buttons-view").append(a);
      }
    }

  $("#add-giphy").on("click", function(event) {
    event.preventDefault();
    var comedians = $("#giphy-input").val().trim();
    comedians.push(comedians);
    console.log(comedians);

    renderButtons();
  });



$(document).on("click", ".comedians", returnGiphys);

  renderButtons();