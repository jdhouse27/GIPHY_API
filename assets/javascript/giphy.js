var animals = ["dog", "bird", "fish", "cat", "goat", "horse", "cow"];

      function returnGiphys() {

        var giphy = $(this).attr("data-name");
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=WvXITKaWXq8GVGQWItBeVODmGEiTEjsw&q="
         + giphy + "&limit=10&offset=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            
            console.log(response);
            
            var results = response.data;
            
            for (var i = 0; i < results.length; i++) {
        
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);
                
                gifDiv.append(animalImage);
                gifDiv.append(p);
  
                $("#images").prepend(gifDiv);
            };
      });
    }
      function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < animals.length; i++) {
        
         var a = $("<button>");
          a.addClass("animal");
          a.attr("data-name", animals[i]);
          a.text(animals[i]);
          $("#buttons-view").append(a);
        }
      }

      $("#add-giphy").on("click", function(event) {
        event.preventDefault();
        var animal = $("#giphy-input").val().trim();
        animals.push(animal);
        console.log(animals);

        renderButtons();
      });

    $(document).on("click", ".animal", returnGiphys);

      renderButtons();