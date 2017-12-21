import { Component } from "react";

class ScrollRestoration extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

export default ScrollRestoration;
