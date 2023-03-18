import '../assets/stylesheets/application.scss';

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App'; // need to import App to be able to use the app component in index.jsx

const containerDiv = document.querySelector('#root'); // selecting where you want the react to be
const root = ReactDOM.createRoot(containerDiv); // creating root
root.render(<App />); // rendering what you want in the root

// CLASS COMPONENTS
// class Hello extends React.Component{
//   render() {
//     const { name, age } = this.props;
//     return <h1>Hi {name}, your age is {age}!!!</h1>;
//   }
// }

// FUNCTIONAL COMPONENTS
// const Hello = (props) => {
//   // const name = props.name;
//   // const age = props.age;
//   const { name, age } = props;// this is the equivalent of the lines above
//   return <h1>Hi {name}, your age is {age}!!!</h1>;
// };
