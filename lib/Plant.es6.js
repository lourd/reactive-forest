Plants = new Mongo.Collection('plants');

Plant = function(id) {
  // Fetching one from database
  if (id) {
    var doc = Plants.findOne(id);
    _.extend(this, doc);
    return;
  }

  // Making a new one
  var state = {
    height: 0,
  };
  var newId = Plants.insert(state);
  _.extend(this, newDoc);
};

Plant.prototype.grow = function() {
  console.log("grow");
  Plants.update(
    { _id: this._id },
    { $inc: { height: 1} },
  );
};

Plant.prototype.die = function() {
  Plants.update(
    { _id: this._id },
    { $inc: { height: -1} },
  );
}