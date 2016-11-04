import { Component } from 'react';

class LocationUpdater extends Component {
  componentWillMount() {
    const url = window.location.pathname + window.location.search;
    this.props.onChange(url);
    window.onpopstate = () => {
      const currentUrl = window.location.pathname + window.location.search;
      if (currentUrl !== this.props.url) {
        this.onChange(currentUrl);
      }
    };
  }

  componentWillReceiveProps(newProps) {
    const currentUrl = window.location.pathname + window.location.search;
    if (newProps.url !== this.props.url && currentUrl !== newProps.url) {
      window.history.pushState(null, null, this.props.url);
    }
  }

  render() {
    return null;
  }
}

export default LocationUpdater;
