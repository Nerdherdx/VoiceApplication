if (annyang) {



    var hello = function(){
        window.open(hello + '.com','youtube');
        console.log("hello");
    };

    //   'Go to *site': function() {

//                window.open(site,'youtube');

    //              console.log("testing website");

    //        }
    //  };

    var website = function(tag){
        var url = 'www.'+tag;
        $.getJSON(url);
        window.open(url +'.com','website');
        console.log(url);
    };


    var search = function(tag) {
        var url = 'https://www.google.com/search?q=' + tag;
        window.open(url,'website');
        console.log(url);
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp'
        });
        console.log(tag);
    };
    /*  var number = function(number){
     P

     };
     */

    var commands = {
        'Go to *tag': website,
        'Search for *search': search,
        // 'Call *number': number



    };

    annyang.addCommands(commands);

    annyang.start();
}