$("form").on("submit", function(e){
  e.preventDefault();
  searchReddit($("input").val())
})


searchReddit("kittens")

function searchReddit(whatIsearched){
var searchURL = "http://www.reddit.com/r/"+ whatIsearched +".json"

  $.getJSON(
    searchURL,
    function kitten(data)

  {
    $("#reddit-content").empty()
    $.each(
      data.data.children.slice(0,20),
      function(i, post){
        var kittenlink = $('<a></a>').attr("href", post.data.url).text(post.data.title)
        var catPicLink =$('<img />').attr("src", post.data.thumbnail)
        var altPic =$('<img />').attr("src", "http://lorempixel.com/100/100")

        if(post.data.thumbnail == "self"){
          $("#reddit-content").append(altPic)
        } else { $("#reddit-content").append(catPicLink)
      }
        $("#reddit-content").append(kittenlink);
        // $("#reddit-content").append(post.data.selftext);
        $("#reddit-content").append('<br>' + "Upvotes: " + post.data.ups );
        $("#reddit-content").append( '<hr>' );
      })
      // $("#reddit-content").empty().append(group);
  })
}
