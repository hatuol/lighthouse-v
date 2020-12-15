$(".block-about p").each(function(){
  if ($(this).text().length > 300) {
    $(this).text($(this).text().substring(0, 300) + "…");
  }
});

$(".hot-news__about p").each(function(){
    if ($(this).text().length > 1000) {
      $(this).text($(this).text().substring(0, 1000) + "…");
    }
  });

  
