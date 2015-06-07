import React from 'react/addons';

class ContentToggle extends React.Component {
  render() {
    return(
      <div>
        <div>{this.props.summary}</div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

class App extends React.Component {

  render() {
    return(
      <div>
        <ContentToggle summary="Pizza!!!">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ContentToggle>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('main-root'));
