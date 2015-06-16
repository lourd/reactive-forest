var { Component, PropTypes } = React;
var { FloatingActionButton, Paper, Styles } = Material;
var ThemeManager = new Styles.ThemeManager();
var { CSSTransitionGroup } = React.addons;

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

  render() {
    var { count } = this.state;
    var paperStyle = {
      width: '200px',
      height: '200px',
      fontSize: '16px',
    }
    return (
      <main>
        <Paper zIndex={2} style={paperStyle} className="count">
          <CSSTransitionGroup transitionName="example" transitionAppear={true} component='div' >
            <div className='num' key={count}>{count}</div>
          </CSSTransitionGroup>
        </Paper>
        <FloatingActionButton onClick={this._onUp.bind(this)} >
          Up!
        </FloatingActionButton>
        <FloatingActionButton onClick={this._onDown.bind(this)} secondary={true}>
          Down
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