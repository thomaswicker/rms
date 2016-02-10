$(document).ready(function(){
	var open = false;
	$("li#srch").click(function(event){
		if (!open) {
		    var html = '<div id="searchBox">';
		    html += '<form id="id_search-form" action="/search/" method="GET">';
		    html += '<input type="text" name="q" id="id_q" />';
		    html += '<button type="submit" id="searchBtnTop"><img src="/media/images/search_btn.png" /></button>';
		    html += '</form>';
		    html += '<a href="#" class="white" id="closeSearch">close</a>';
		    html += "</div>";
		    $("#container").append(html);
		    $("#id_q").focus();
		    $("#closeSearch").bind('click', closeSearch);
	        $("#searchBtnTop").bind('click', removePunctuationChars);
		    $("#srch a").css("color", "#FFFFFF");
		    open = true;
		}
		return false;
	    });
 
	function closeSearch() {
	    $("#searchBox").remove();
	    if ($("body").attr("id") != "search")
		$("#srch a").css("color", "#0099FF");
	    open = false;
	    return false;
	}
    function removePunctuationChars(){
	    var q = $("form#id_search-form input#id_q").val();
	    q = q.replace('?', '').replace('-', ' ');
	    $("input#id_q").val(q);
	    $("#id_search-form").submit();
    }
});
