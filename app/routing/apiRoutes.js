var path = require('path');
var friends = require('../data/friends');
module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
      return res.json(friends);
    });
  
    app.post('/api/friends', function(req, res) {
      var diffArray = [];
        for(i=0; i < friends.length; i++){
            console.log(friends[i].scores);
            var totalDiff;
            
            var q1S = friends[i].scores[0] - req.body.scores[0];
            var q2S = friends[i].scores[1] - req.body.scores[1];
            var q3S = friends[i].scores[2] - req.body.scores[2];
            var q4S = friends[i].scores[3] - req.body.scores[3];
            var q5S = friends[i].scores[4] - req.body.scores[4];
            var q6S = friends[i].scores[5] - req.body.scores[5];
            var q7S = friends[i].scores[6] - req.body.scores[6];
            var q8S = friends[i].scores[7] - req.body.scores[7];
            var q9S = friends[i].scores[8] - req.body.scores[8];
            var q10S = friends[i].scores[9] - req.body.scores[9];
            totalDiff = q1S + q2S + q3S + q4S + q5S + q6S + q7S + q8S + q9S + q10S;
            console.log('with ' + friends[i].name +' ' + Math.abs(totalDiff)); 
            
            var diffScore = {
              name: friends[i].name,
              photo: friends[i].photo,
              difference: Math.abs(totalDiff)
            }
            diffArray.push(diffScore);
            
        };
        friends.push(req.body);

       var smallest = Math.min.apply(Math, diffArray.map(function(x){ 
          return x.difference;
        }));
        for (i=0; i < diffArray.length; i++ ){
          if (diffArray[i].difference <= smallest){
            console.log('closest match name: ' + diffArray[i].name + 'Pic:' + diffArray[i].photo);
            res.json({Name: diffArray[i].name, Pic: diffArray[i].photo});
          };
        };
       
          });
  };