$("document").ready(function() {
  $.getJSON("../data.json", function(data) {
    const siteData = data;
    $("title").html(siteData.name);
  }).fail(function() {
    console.log("Err");
  });
});
