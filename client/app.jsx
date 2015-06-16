var { Component, PropTypes } = React;
var { RaisedButton } = Material;

class Plant extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount}
  }

  render() {
    var { count } = this.state;
    return <div>{count}</div>;
  }
}

Plant.propTypes = {
  initialCount: PropTypes.number,
}

Plant.defaultProps = {
  initialCount: 0,
}

document.addEventListener("DOMContentLoaded", function(event) {
  React.render(<Plant />, document.body);
});