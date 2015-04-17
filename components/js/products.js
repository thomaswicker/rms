// // BEGIN CUSTOM SEARCH FILTER SCRIPT

//  (function ($) {
//     jQuery.expr[':'].Contains = function(a,i,m){
//       return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
//     };
   
//     function listFilter(header, list) {
//     var form = $("<form>").attr({"class":"filterform","action":"#"}),
//       input = $("<input>").attr({"class":"filterinput","type":"text"});
//     $(form).append(input).appendTo(header);
   
//     $(input)
//       .change( function () {
//       var filter = $(this).val();
//       if(filter) {
//         $(list).find("a:not(:Contains(" + filter + "))").parent().slideUp();
//         $(list).find("a:Contains(" + filter + ")").parent().slideDown();
//       } else {
//         $(list).find("li").slideDown();
//       }
//       return false;
//       })
//     .keyup( function () {
//       $(this).change();
//     });
//     }
  
//     $(function () {
//     listFilter($("#header"), $("#list"));
//     });
//   }(jQuery));


// //adding placeholder to input box

// $(function () {
//   $('.filterinput').attr('placeholder', 'Filter the list below:');
// })();

//   if (location.hash) {
//     setTimeout(function() {
//       window.scrollTo(0, 0);
//     }, 1);
//   }
//   $(function(){
//     var hash = window.location.hash;
//     hash && $('ul.nav a[href="' + hash + '"]').tab('show');

//     $('.nav-tabs a').click(function (e) {
//       $(this).tab('show');
//       var scrollmem = $('body').scrollTop();
//       window.location.hash = this.hash;
//       $('html,body').scrollTop(scrollmem);
//     });
//   });


// // END CUSTOM SEARCH FILTER SCRIPT




// $('#faqSearchInput').keyup(function(){
//    var valThis = $(this).val().toLowerCase();
//    if(valThis === ""){
//     $('#faqSearchResults > h3').show();
// } else {
//     $('#faqSearchResults > h3').each(function(){
//       var text = $(this).text().toLowerCase();
//       (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
//     });
//   };
// });



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
