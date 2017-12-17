$(document).ready(function() {
    $('#getQuote').on('click', function() {
        // using mashape API in JavaScript http://docs.mashape.com/javascript
        var html = "<img src='https://www.dropbox.com/s/dcdtp9bj50vlctn/loading.gif?raw=1' style='display:block;margin:50px auto;'>";
        $('#output').html(html);
        $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'POST', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function(data) {
                // using random quote API served on https://market.mashape.com/andruxnet/random-famous-quotes
                //To see the whole object you can output it to your browser console using: console.log(data);
                html = "";
                var hrefLink = "";
                html += data.quote;
                html += "<footer>-" + data.author + "</footer>";
                hrefLink += "https://twitter.com/home?status=" + "\"" + data.quote + "\" -" + data.author;
                $('#output').html(html);
                $("#tweetThis").attr({
                    "href": hrefLink
                });
            },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "rrqtCum5WumshiKUCojxife4igFRp1CewIvjsnI1QWcw3cmScx"); 
            } 
        });
    })
})








