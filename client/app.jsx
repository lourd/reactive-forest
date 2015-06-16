App = React.createClass({
  mixins: [ ReactiveMixin ],

  getReactiveState: function() {
    return {
      plants: Plants.find().fetch()
    }
  },

  handleGrow: function(plant, e) {
    if (plant.height > 9) {
      new Plant();
    } else {
      console.log(plant);
      plant.grow();
    }
  },

  render: function() {
    var { plant, plants } = this.state;
    var trees = plants.map( function(plantDoc, i) {
      var p = new Plant(plantDoc._id);
      return <Tree
        height={p.height}
        handleClick={this.handleGrow.bind(this, p)}
        key={p._id}
        style={{
          position: 'absolute',
          left: `${i*17 % 100}vw`,
          top: `${i*17 % 100}vh`
        }}
        className='plant'
      />
    }.bind(this));
    return (
      <main>
        {trees}
      </main>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
  React.render(<App />, document.body);
});