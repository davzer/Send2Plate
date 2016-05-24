var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost/send2plate', function(err) {
  if (err) { throw err; }
});

