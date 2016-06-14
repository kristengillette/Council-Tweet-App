//Update Twitter handle in tweet select when changed
var twitterHandle = "@PHLCouncil";
var tweetContent = "";

$('#council-select input').on('change', function() {
   twitterHandle = $('input[name=council-member]:checked', '#council-select').val(); 
   $(".council-member").text(twitterHandle);
   tweetContent = $('input[name=tweet]:checked', '#tweet-select').next().text();
   $('#twitter-button iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-text', tweetContent);
    $('#twitter-button').append(tweetBtn);
    twttr.widgets.load();
});

//Update Twitter content when selected

$('#tweet-select input').on('change', function() {
   tweetContent = $('input[name=tweet]:checked', '#tweet-select').next().text(); 
   $('#twitter-button iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-text', tweetContent);
    $('#twitter-button').append(tweetBtn);
    twttr.widgets.load();	
});


