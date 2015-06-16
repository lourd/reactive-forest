var { PropTypes } = React;
var { FloatingActionButton, Paper, Styles } = Material;
var ThemeManager = new Styles.ThemeManager();

App = React.createClass({
  mixins: [ ReactiveMixin ],

  childContextTypes: {
    muiTheme: PropTypes.object,
  },

  getReactiveState: function() {
    var p = new Plant();
    return {
      plant: p
    }
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  _onUp: function(e) {
    this.state.plant.grow()
  },

  _onDown: function(e) {
    this.state.plant.die()
  },

  render: function() {
    var { plant } = this.state;
    return (
      <main>
        <Paper zIndex={2} className="count-card">
          <Tree height={plant.height} />
          <FloatingActionButton
            onClick={this._onUp}
            className="up"
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
            }}
          >Grow</FloatingActionButton>
          <FloatingActionButton
            onClick={this._onDown}
            secondary={true}
            className="down"
            style={{
              position: 'absolute',
              bottom: '5px',
              left: '5px',
            }}
          >Die</FloatingActionButton>
        </Paper>
      </main>
    );
  }
});

document.addEventListener("DOMContentLoaded", function(event) {
  React.render(<App />, document.body);
});