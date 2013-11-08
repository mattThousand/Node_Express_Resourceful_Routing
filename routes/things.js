exports.index = function(req, res) {
  res.send('index of things');
};

exports.new = function(req, res){
  res.send('perhaps a form for creating new things');
};

exports.create = function(req, res){
  res.send('the logic for handling the new thing form');
};

exports.show = function(req, res){
  res.send("Showing thing: " + req.params.thing);
};

exports.edit = function(req, res){
  res.send('an interface for editing thing: ' + req.params.thing);
};

exports.update = function(req, res){
  res.send('the logic for handing the request from the edit thing interface');
};

exports.destroy = function(req, res){
  res.send('Delete thing: ' + req.params.thing);
};

