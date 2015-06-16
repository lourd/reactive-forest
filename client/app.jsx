var { Component, PropTypes } = React;
var { FloatingActionButton, Paper, Styles, Slider } = Material;
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

  _onChange(e, value) {
    this.setState({ count: value });
  }

  render() {
    var { count } = this.state;
    var truncCount = parseInt(count);
    return (
      <main>
        <Paper zIndex={2} className="count-card">
          {/*<CSSTransitionGroup transitionName="example" transitionAppear={true} component='div' >*/}
            <div className='num' key={count}>{truncCount}</div>
          {/*</CSSTransitionGroup>*/}
        </Paper>
        <FloatingActionButton onClick={this._onUp.bind(this)} >
          Up!
        </FloatingActionButton>
        <FloatingActionButton onClick={this._onDown.bind(this)} secondary={true}>
          Down
        </FloatingActionButton>
        <Slider name="Slider" value={count} onChange={this._onChange.bind(this)} min={0} max={100} step={1}/>
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