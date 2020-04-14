var unirest = require("unirest");

$("#LiveFeed").on("click", function(){

    var req = unirest("GET", "https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php");
    
    req.query({
        "completedlimit": "5",
        "inprogresslimit": "5",
        "upcomingLimit": "5"
    });
    
    req.headers({
        "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
        "x-rapidapi-key": "6a1625adcbmsh922712b909359d5p1ac673jsn67c39da8c731"
    });
    
    
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
    
        console.log(res.body);
    });
}
