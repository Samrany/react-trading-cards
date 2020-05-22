"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome to the site! </p>
        <a href="/cards"> Check out our cards here. </a>
        <img src ="static/img/balloonicorn.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
