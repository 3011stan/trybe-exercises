import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(ev) {
    this.setState({
      input: ev.target.value,
    });
  };

  handleClick() {
    const { input } = this.state;
    this.setState({
      input: '',
      output: input,
    });
  };

  render() {
    const { input, output } = this.state;
    return (
      <div>
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            type='email'
            value={input}
            onChange={this.handleChange}
          />
        </label>
        <button onClick={this.handleClick}>Entrar</button>
        <button>Voltar</button><br />
        <strong>Valor: {output}</strong>
        <p>learn react</p>
      </div>
    )
  }
}

export default App;
