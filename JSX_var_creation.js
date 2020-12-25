// without JSX the var creation would be const myelement = React.createElement('h1', {}, 'I do not use JSX!');

const myelement = <h1>I Love JSX!</h1>;
ReactDOM.render(myelement, document.getElementById('root'));

//JSX - construction an expression
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
