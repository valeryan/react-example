import 'bootstrap';
import './scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
  document.getElementById('root').innerHTML = `
    <div>
      Hello HTML
      <input class="form-control" />
      <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello React",
      React.createElement('input', {className: 'form-control'}),
      React.createElement('pre', null, (new Date).toLocaleTimeString())
    ),
    document.getElementById('root2'),
  );
}

setInterval(render, 1000);
