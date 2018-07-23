
// Load data, hold the array for all friend entries
var nameData = require('../data/friends.js');


// routing
module.exports = function(app) {

    // API get request
    app.get('/api/friends', function(req, res) {
        res.json(nameData);
    });
    // API post request, pushes JSON to javascript array
    app.post('/api/friends', function(req, res) {
       
    //  variable object that holds match compatibility    
        var friendFind = {
            name: "",
            photo: "",
            friendMatch: Infinity
        };
        // Parsing the users servey POST
        var userData = req.body;
        var userScore = userData.scores;
        
        // Variable to calculate difference between user and entries scores within database
        var totalDifference;
        // For loop that will loop through all possible friend entries
        for (var i = 0; i < nameData.length; i++) {
            var currentFriend = nameData[i];
            totalDifference = 0;

            console.log(currentFriend.name);
        // For loop for the scores friend entries
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScore[j];

                // Calculatig the difference between scores an add to totalDifference
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            // If statement for the difference added and is less than difference of best match
            if (totalDifference <= friendFind.friendDifference) {
                // Resets the friendFind to be the new friend
                friendFind.name = currentFriend.name;
                friendFind.photo = currentFriend.photo;
                friendFind.friendDifference = totalDifference;
            }
         }
         // Save's the user data to database
         nameData.push(userData);
        // Returns JSON with user's new friend match
         res.json(friendFind);
    });
}
