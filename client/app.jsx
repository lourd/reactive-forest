var { Component, PropTypes } = React;
var { FloatingActionButton, Paper, Styles, Slider } = Material;
var ThemeManager = new Styles.ThemeManager();

class Plant extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _onUp(e) {
    this.setState({ count: this.state.count+1 });
  }

  _onDown(e) {
    this.setState({ count: this.state.count-1 });
  }

  _onChange(e, value) {
    this.setState({ count: value });
  }

  render() {
    var { count } = this.state;
    var truncCount = parseInt(count);
    return (
      <main>
        <Paper zIndex={2} className="count-card">
          < Tree height={count} />
          <FloatingActionButton
            onClick={this._onUp.bind(this)}
            className="up"
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
            }}
          >Grow</FloatingActionButton>
          <FloatingActionButton
            onClick={this._onDown.bind(this)}
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
}

Plant.childContextTypes = {
  muiTheme: React.PropTypes.object,
}

document.addEventListener("DOMContentLoaded", function(event) {
  React.render(<Plant />, document.body);
});