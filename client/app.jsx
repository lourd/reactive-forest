var { Component, PropTypes } = React;
var { FloatingActionButton, RaisedButton, Styles } = Material;
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

  _onClick(e) {
    this.setState({ count: this.state.count+1 });
  }

  render() {
    var { count } = this.state;
    return (
      <main>
        <RaisedButton label={`${count}`}/>
        <FloatingActionButton onClick={this._onClick.bind(this)} >
          Up!
        </FloatingActionButton>
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