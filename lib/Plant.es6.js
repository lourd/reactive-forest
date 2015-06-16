// A collection with a single item
Plants = new Mongo.Collection('plants');

Plant = function() {
  var doc = Plants.findOne();
  if ( doc ) {
    _.extend(this, doc);
    return;
  }

  var state = {
    height: 0,
  };
  state._id = Plants.insert(state);
  _.extend(this, state);
};

Plant.prototype.grow = function() {
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