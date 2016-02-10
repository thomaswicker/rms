window.fbAsyncInit = function() {
    FB.init({
        appId: '1572308976315273',
        version: 'v2.2',
    });
    FB.getLoginStatus(function(response) {
    	var getPageToken = function() {
		        FB.api(
		            "/me/accounts",
		            function(response) {
		                if (response && !response.error) {
		                	var appendForm = function(name, value) {
								var input = document.createElement('input');
							    input.type = 'hidden';
							    input.name = name;
							    input.value = value;
							    document.forms['highlight_form'].appendChild(input);
		                	}
		                	// If you want to post news to another page change data array index below.
		                	appendForm('page_id', response.data[0].id)
							appendForm('page_token', response.data[0].access_token)
		                }
		            }
		        );
    	}
        if (response.status === 'connected') {
            getPageToken();
        } else {
            FB.login(getPageToken, {
                scope: 'manage_pages,publish_actions', 
            });
        }
    });

};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
