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


// JS for hide/show on FAQ header/answer divs

$(function () {
  var faqHeader = $('.faq-questions-header'),
      faqBody   = $('.faq-questions-answer'),
      faqTogglePlus = $('.container-right-plus'),
      faqToggleMinus = $('.container-right-minus');

  faqHeader.on('click', function () {
    $(this).toggleClass('activeHeader');
    $(this).next().toggleClass('activeFAQ');
    $(this).children('.container-right-plus').toggle();
    $(this).children('.container-right-minus').toggle();
  }); 
});

// JS for hide/show on FAQ header/answer divs

$(function () {
  var faqHeader = $('.faq-questions-header-2'),
      faqBody   = $('.faq-questions-answer-2'),
      faqTogglePlus = $('.container-right-plus'),
      faqToggleMinus = $('.container-right-minus');

  faqHeader.on('click', function () {
    $(this).toggleClass('activeHeader-2');
    $(this).next().toggleClass('activeFAQ');
    $(this).children('.container-right-plus').toggle();
    $(this).children('.container-right-minus').toggle();
  }); 
});

// JS for hide/show on FAQ header/answer divs

$(function () {
  var faqHeader = $('.faq-questions-header-2b'),
      faqBody   = $('.faq-questions-answer-2b'),
      faqTogglePlus = $('.container-right-plus'),
      faqToggleMinus = $('.container-right-minus');
  
  faqHeader.on('click', function () {
    $(this).toggleClass('activeHeader-2');
    $(this).next().toggleClass('activeFAQ');
    $(this).children('.container-right-plus').toggle();
    $(this).children('.container-right-minus').toggle();
  }); 
});

// JS to fire off support tab after coming back from support page related FAQ

$(function () {
  var tab3 = $('#tab3');

  if (window.location.hash === "#fromFAQ") {
    $('.thetab').removeClass('active');
    $('#tab3 a').tab('show');
  }
});


// JS to control hide/show toggles on Support page FAQs

$(function () {
  var salesToggle = $('#sales'),
      technicalToggle = $('#technical'),
      generalToggle = $('#general');

  salesToggle.on('click', function () {
    $('.sales-category').slideToggle("slow");
    salesToggle.toggleClass('sales2');
  });

  technicalToggle.on('click', function () {
    $('.technical-category').slideToggle("slow");
      technicalToggle.toggleClass('technical2');
  });

  generalToggle.on('click', function () {
    $('.general-category').slideToggle("slow");
      generalToggle.toggleClass('general2');
  });
});



 $(function () {
    $('.filterinput').attr('placeholder', 'Filter the list below:');
  })();

  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1);
  }
  $(function(){
    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');

    $('.nav-tabs a').click(function (e) {
      $(this).tab('show');
      var scrollmem = $('body').scrollTop();
      window.location.hash = this.hash;
      $('html,body').scrollTop(scrollmem);
    });
  });


// Script to filter list items based on input

  (function ($) {
    jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
    };

    function listFilter(header, list) {
      var form = $("<form>").attr({"class":"filterform","action":"#"}),
      input = $("<input>").attr({"class":"filterinput","type":"text"});
      $(form).append(input).appendTo('#header2a');

      $(input)
      .change( function () {
        var filter = $(this).val();
        if(filter) {
          $(list).find("a:not(:Contains(" + filter + "))").parent().slideUp();
          $(list).find("a:Contains(" + filter + ")").parent().slideDown();
        } else {
          $(list).find("li").slideDown();
        }
        return false;
      })
      .keyup( function () {
        $(this).change();
      });
    }

    $(function () {
      listFilter($("#header2a"), $("#list"));

    });
  }(jQuery));

  
  (function ($) {
    jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
    };

    function listFilter2(header, list) {
      var form = $("<form>").attr({"class":"filterform","action":"#"}),
      input = $("<input>").attr({"class":"filterinput","type":"text"});
      $(form).append(input).appendTo('#header2b');

      $(input)
      .change( function () {
        var filter = $(this).val();
        if(filter) {
          $(list).find("li p span:not(:Contains(" + filter + "))").parent().parent().slideUp();
          $(list).find("li p span:Contains(" + filter + ")").parent().parent().slideDown();
        } else {
          $(list).find("li").slideDown();
        }
        return false;
      })
      .keyup( function () {
        $(this).change();
      });
    }

    $(function () {
      listFilter2($("#header2b"), $("#list2"));

    });
  }(jQuery));