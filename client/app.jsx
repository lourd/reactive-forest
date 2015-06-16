var { Component } = React;

class Plant extends Component {
  render() {
    return <div>Hello world!</div>;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  React.render(<Plant />, document.body);
});