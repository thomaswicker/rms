// BEGIN CUSTOM SEARCH FILTER SCRIPT

  $('#productsSearchInput').keyup(function(){
   var valThis = $(this).val().toLowerCase();
   if(valThis === ""){
    $('#productsSearchResults > li').show();
} else {
    $('#productsSearchResults > li').each(function(){
      var text = $(this).text().toLowerCase();
      (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
    });
  };
});

// END CUSTOM SEARCH FILTER SCRIPT

  $('#faqSearchInput').keyup(function(){
   var valThis = $(this).val().toLowerCase();
   if(valThis === ""){
    $('#faqSearchResults > h3').show();
} else {
    $('#faqSearchResults > h3').each(function(){
      var text = $(this).text().toLowerCase();
      (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
    });
  };
});