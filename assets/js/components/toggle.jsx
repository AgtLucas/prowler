import React from 'react/addons';

class ContentToggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showDetails: true}
  }

  renderDetails() {
    var showStuff = this.state.showDetails;
    if (showStuff)
      return this.props.children;
    else
      return null;
  }

  toggle() {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    return(
      <div>
        <div onClick={this.toggle.bind(this)}>{this.props.summary}</div>
        <div>{this.renderDetails()}</div>
      </div>
    )
  }

}

export default ContentToggle;
