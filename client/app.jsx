var { Component, PropTypes } = React;
var { Paper, RaisedButton, Styles } = Material;
var ThemeManager = new Styles.ThemeManager();

class Plant extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount}
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    var { count } = this.state;
    return (
      <main>
        {/*<Paper zDepth={2}>{count}</Paper>*/}
        <RaisedButton label="Yay"/>

      </main>
    );
  }
}

Plant.propTypes = {
  initialCount: PropTypes.number,
}

Plant.defaultProps = {
  initialCount: 0,
}

Plant.childContextTypes = {
  muiTheme: React.PropTypes.object,
}
document.addEventListener("DOMContentLoaded", function(event) {
  React.render(<Plant />, document.body);
});