import './App.css';
import Preview from './Preview';
import React from 'react';
import { mdExample } from './mdExample';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textArea: '',
      toMarkdown: [],
    }
    this.textAreaOnChange = this.textAreaOnChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      textArea: mdExample, //put the inicial markdown example
    })
  }

  textAreaOnChange(event) {
    const text = event.target.value;
    this.setState({textArea: text});
  }

  render() {
    const {textArea} = this.state
    return (
      <div className="App">
        <div className="left">
          <h2 className="title">- <u>Your Markdown</u></h2>
          <textarea id="editor" onChange={this.textAreaOnChange} value={textArea}/>
        </div>
        <div className="right">
          <h2 className="title">- <u>Your Preview</u></h2>
          <Preview text={textArea}/>
        </div>
      </div>
    );
  };
};

export default App;
